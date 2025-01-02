const designers = [
  {
    id: 1,
    name: "Fakhar hussain",
    specialization: "Interior Design",
    experience: "2 years",
    contactEmail: "fakhar851@gmail.com",
    portfolio: "http://example.com/alice-portfolio",
    image: "asset/img/index/2.jpg.jfif"
  },
  {
    id: 2,
    name: "Abdul Rehman Nadeem",
    specialization: "Furniture Design",
    experience: "2 years",
    contactEmail: "20.abdulrehman.03@gmail.com",
    portfolio: "http://example.com/john-portfolio",
    image: "asset/img/index/a7d93049-f1a1-4461-9d7c-3cfc1427d6b3.jfif"
  },
  {
    id: 3,
    name: "Adnan Alam",
    specialization: "Lighting Design",
    experience: "1 years",
    contactEmail: "http://adnan.tech10gmail.com/",
    portfolio: "http://example.com/emma-portfolio",
    image: "asset/img/index/1598dc88-a8b2-4eeb-a973-9e725f826516.jfif"
  },
  {
    id: 1,
    name: "Talha shujaat",
    specialization: "Interior Design",
    experience: "1 years",
    contactEmail: "talha.tech26@gmail.com",
    portfolio: "http://example.com/alice-portfolio",
    image: "asset/img/index/IMG_1843.JPG"
  },
  {
    id: 2,
    name: "Laraib Anosha",
    specialization: "Furniture Design",
    experience: "1 years",
    contactEmail: "john@example.com",
    portfolio: "http://example.com/john-portfolio",
    image: "asset/img/index/bda6dfdc-d73c-4844-8ff5-7d91e8646f96.jfif"
  },
  {
    id: 3,
    name: "Fatima Attari",
    specialization: "Lighting Design",
    experience: "1 years",
    contactEmail: "emma@example.com",
    portfolio: "http://example.com/emma-portfolio",
    image: "asset/img/index/df6d2c96-2197-478d-b83f-238dbb399649.jfif"
  }
  
];

// Function to render the designer cards
function renderDesigners(designers) {
  const designerList = document.getElementById("designerList");
  designerList.innerHTML = ""; // Clear existing content

  designers.forEach(designer => {
    const div = document.createElement("div");
    div.classList.add("col-12", "col-md-4", "mb-4");
    div.innerHTML = `
      <div class="card h-80 designer-card">
        <img src="${designer.image}" class="card-img-top" alt="${designer.name}">
        <div class="card-body">
          <h5 class="card-title">${designer.name}</h5>
          <p><b>Specialization:</b> ${designer.specialization}</p>
          <p><b>Experience:</b> ${designer.experience}</p>
          <a href="${designer.portfolio}" target="_blank" class="btn btn-dark">View Portfolio</a>
          <button class="button mt-2" onclick="contactDesigner('${designer.contactEmail}')">Contact</button>
        </div>
      </div>
    `;
    designerList.appendChild(div);
  });
}

// Function to contact designer via email
function contactDesigner(email) {
  window.location.href = `mailto:${email}`;
}

// Initial render of the designers
renderDesigners(designers);