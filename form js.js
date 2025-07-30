document.getElementById("photoUpload").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.getElementById("photoPreview");
        img.src = e.target.result;
        img.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });