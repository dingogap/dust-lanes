const formatDate = (inputDate) => {
    if (inputDate instanceof Date && !isNaN(inputDate)) {
      const year = inputDate.getFullYear();
      const month = String(inputDate.getMonth() + 1).padStart(2, '0');
      const day = String(inputDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } else {
      return 'Invalid Date';
    }
  };

  export default formatDate