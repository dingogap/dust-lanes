export default function formatDate(dated) {

    const year = dated.getFullYear();
    const month = String(dated.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(dated.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  