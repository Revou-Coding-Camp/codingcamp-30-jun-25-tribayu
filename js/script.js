const placeholder = document.getElementById("output-placeholder");
      const resultBlock = document.getElementById("output-result");

      // Kosongkan output saat awal load
      document.getElementById("current-time").textContent = "";
      document.getElementById("result-name").textContent = "";
      document.getElementById("result-dob").textContent = "";
      document.getElementById("result-gender").textContent = "";
      document.getElementById("result-message").textContent = "";

       document.getElementById("message-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("input-nama").value.trim();
        const dob = document.getElementById("input-dob").value;
        const message = document.getElementById("input-message").value.trim();
        const  genderEl = document.querySelector('input[name="gender"]:checked');
        const gender = genderEl ? genderEl.value : "";

        if (!name || !dob || !message || !gender) {
          alert("⚠️ Silakan lengkapi semua kolom terlebih dahulu");
          placeholder.classList.remove("hidden");
          resultBlock.classList.add("hidden");
          return;
        }

         // Tampilkan hasil jika valid
        document.getElementById("result-name").textContent = name;
        document.getElementById("result-dob").textContent = dob;
        document.getElementById("result-message").textContent = message;
        document.getElementById("result-gender").textContent = gender;
        document.getElementById("current-time").textContent = new Date().toLocaleString();

        // Tampilkan hasil, sembunyikan placeholder
        placeholder.classList.add("hidden");
        resultBlock.classList.remove("hidden");
    })