// Getter function for local storage
export const getFromLocalStorage = (key) => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item);
      }
      return null;
    } catch (error) {
      console.error('Error getting item from local storage:', error);
      return null;
    }
  };
  
  // Setter function for local storage
  export const setToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Error setting item to local storage:', error);
    }
  };
  