// Функция для скрытия/показа блоков
function toggleVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }
  
  function navigateToContact() {
    window.location.href = "contact.html"; // Укажите путь к вашей контактной странице
  }
  