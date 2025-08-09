// Google Sheets API для відправки даних форми
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwUJblt8nBz3aalv3eIJt2od4nrSmhZhcjLX3hqyFVqboOkzcyypVLAZV5hS_xNEHwl/exec';

export const sendToGoogleSheets = async (formData) => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        timestamp: new Date().toLocaleString('uk-UA'),
      }),
    });

    return { success: true };
  } catch (error) {
    console.error('Помилка відправки до Google Sheets:', error);
    return { success: false, error };
  }
};

// Додаткова функція для валідації телефону
export const validatePhoneNumber = (phone) => {
  // Українські номери телефонів
  const phoneRegex = /^(\+380|380|0)[0-9]{9}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Функція для форматування телефону
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  if (cleaned.startsWith('0')) {
    return '+38' + cleaned;
  }
  if (cleaned.startsWith('380')) {
    return '+' + cleaned;
  }
  if (cleaned.startsWith('+380')) {
    return cleaned;
  }
  return phone;
};

// Константи для роботи з localStorage
const STORAGE_KEY = 'toddler_form_submissions';
const MAX_SUBMISSIONS_PER_DAY = 3;
const HOURS_24 = 24 * 60 * 60 * 1000; // 24 години в мілісекундах

// Функція для отримання даних з localStorage
const getStorageData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { submissions: [], lastReset: Date.now() };
  } catch (error) {
    console.error('Помилка читання localStorage:', error);
    return { submissions: [], lastReset: Date.now() };
  }
};

// Функція для збереження даних в localStorage
const setStorageData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Помилка запису в localStorage:', error);
  }
};

// Функція для очищення старих записів (після 24 годин)
const cleanOldSubmissions = () => {
  const data = getStorageData();
  const now = Date.now();
  
  // Якщо пройшло більше 24 годин з останнього скидання, очищаємо
  if (now - data.lastReset > HOURS_24) {
    const cleanData = {
      submissions: [],
      lastReset: now
    };
    setStorageData(cleanData);
    return cleanData;
  }
  
  return data;
};

// Функція для перевірки кількості заявок
export const getSubmissionCount = () => {
  const data = cleanOldSubmissions();
  return data.submissions.length;
};

// Функція для перевірки чи можна відправити заявку
export const canSubmitForm = () => {
  const count = getSubmissionCount();
  return count < MAX_SUBMISSIONS_PER_DAY;
};

// Функція для додавання нової заявки в localStorage
export const addSubmission = (formData) => {
  const data = cleanOldSubmissions();
  const submission = {
    timestamp: Date.now(),
    name: formData.name,
    phone: formData.phone
  };
  
  data.submissions.push(submission);
  setStorageData(data);
};

// Функція для отримання часу до наступного скидання
export const getTimeUntilReset = () => {
  const data = getStorageData();
  const timeUntilReset = HOURS_24 - (Date.now() - data.lastReset);
  return Math.max(0, timeUntilReset);
};

// Функція для форматування часу до скидання
export const formatTimeUntilReset = () => {
  const timeLeft = getTimeUntilReset();
  const hours = Math.floor(timeLeft / (60 * 60 * 1000));
  const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
  
  if (hours > 0) {
    return `${hours} год ${minutes} хв`;
  } else {
    return `${minutes} хв`;
  }
};
