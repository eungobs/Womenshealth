const BACKEND_API_URL = "YOUR_RENDER_BACKEND_URL" // IMPORTANT: Replace this with your actual Render backend URL after deployment!
let doctorsData = []
let selectedDoctorData = null
let doctorsClientsChart = null

let currentCalendarMonth = new Date().getMonth()
let currentCalendarYear = new Date().getFullYear()

document.addEventListener("DOMContentLoaded", () => {
  fetchDoctorsData()
  generateCalendar()
  document.getElementById("bookingForm").addEventListener("submit", handleBookingSubmit)
})

async function fetchDoctorsData() {
  loadMockData()
}

function loadMockData() {
  const mockDoctorsData = [
    {
      name: "Dr. Zola Mkhize",
      speciality: "Gynecologist",
      detailed_specialities: "Obstetrics, Reproductive Endocrinology, Infertility",
      location: "Cape Town, Western Cape",
      exact_address: "Mediclinic Cape Town, 21 Hof St, Gardens, Cape Town, 8001",
      profile_picture: "https://i.pinimg.com/1200x/14/e6/34/14e634812e5c604f61c72776a8a92604.jpg",
      phone_number: "(021) 123-4567",
      email: "zola.mkhize@mediclinic.co.za",
      years_of_experience: 15,
      total_patients_helped: 1250,
      clients_per_month: [
        { month: "March", year: 2024, clients: 55 },
        { month: "April", year: 2024, clients: 58 },
        { month: "May", year: 2024, clients: 50 },
        { month: "June", year: 2024, clients: 60 },
        { month: "July", year: 2024, clients: 53 },
        { month: "August", year: 2024, clients: 57 },
        { month: "September", year: 2024, clients: 52 },
        { month: "October", year: 2024, clients: 59 },
        { month: "November", year: 2024, clients: 54 },
        { month: "December", year: 2024, clients: 61 },
        { month: "January", year: 2025, clients: 65 },
        { month: "February", year: 2025, clients: 60 },
        { month: "March", year: 2025, clients: 68 },
      ],
    },
    {
      name: "Dr. Lerato Ndlovu",
      speciality: "Gynecologist",
      detailed_specialities: "General Gynecology, Family Planning, Adolescent Health",
      location: "Johannesburg, Gauteng",
      exact_address: "Netcare Milpark Hospital, 9 Guild Rd, Parktown, Johannesburg, 2193",
      profile_picture: "https://i.pinimg.com/736x/a9/21/7f/a9217f43edd88f18a5bdbc480aa4d8e4.jpg",
      phone_number: "(011) 987-6543",
      email: "lerato.ndlovu@netcare.co.za",
      years_of_experience: 10,
      total_patients_helped: 980,
      clients_per_month: [
        { month: "March", year: 2024, clients: 62 },
        { month: "April", year: 2024, clients: 65 },
        { month: "May", year: 2024, clients: 58 },
        { month: "June", year: 2024, clients: 68 },
        { month: "July", year: 2024, clients: 60 },
        { month: "August", year: 2024, clients: 64 },
        { month: "September", year: 2024, clients: 59 },
        { month: "October", year: 2024, clients: 66 },
        { month: "November", year: 2024, clients: 61 },
        { month: "December", year: 2024, clients: 69 },
        { month: "January", year: 2025, clients: 72 },
        { month: "February", year: 2025, clients: 68 },
        { month: "March", year: 2025, clients: 75 },
      ],
    },
    {
      name: "Dr. Sipho Dlamini",
      speciality: "Gynecologist",
      detailed_specialities: "Minimally Invasive Surgery, Urogynecology, Pelvic Floor Disorders",
      location: "Durban, KwaZulu-Natal",
      exact_address: "Life Entabeni Hospital, 148 South Ridge Rd, Berea, Durban, 4001",
      profile_picture: "https://i.pinimg.com/736x/7e/83/0e/7e830e9c49dee63d546ba2b376523d30.jpg",
      phone_number: "(031) 234-5678",
      email: "sipho.dlamini@mediclinic.co.za",
      years_of_experience: 8,
      total_patients_helped: 720,
      clients_per_month: [
        { month: "March", year: 2024, clients: 40 },
        { month: "April", year: 2024, clients: 42 },
        { month: "May", year: 2024, clients: 38 },
        { month: "June", year: 2024, clients: 45 },
        { month: "July", year: 2024, clients: 39 },
        { month: "August", year: 2024, clients: 43 },
        { month: "September", year: 2024, clients: 37 },
        { month: "October", year: 2024, clients: 44 },
        { month: "November", year: 2024, clients: 38 },
        { month: "December", year: 2024, clients: 46 },
        { month: "January", year: 2025, clients: 48 },
        { month: "February", year: 2025, clients: 45 },
        { month: "March", year: 2025, clients: 50 },
      ],
    },
    {
      name: "Dr. Thandiwe Khumalo",
      speciality: "Gynecologist",
      detailed_specialities: "High-Risk Pregnancy, Maternal-Fetal Medicine, Prenatal Diagnosis",
      location: "Pretoria, Gauteng",
      exact_address: "Mediclinic Medforum, 241 Pretorius St, Arcadia, Pretoria, 0007",
      profile_picture: "https://i.pinimg.com/1200x/ed/ee/0c/edee0cc644104700527fdad210cdb588.jpg",
      phone_number: "(012) 345-6789",
      email: "thandiwe.khumalo@mediclinic.co.za",
      years_of_experience: 12,
      total_patients_helped: 1100,
      clients_per_month: [
        { month: "March", year: 2024, clients: 48 },
        { month: "April", year: 2024, clients: 50 },
        { month: "May", year: 2024, clients: 45 },
        { month: "June", year: 2024, clients: 52 },
        { month: "July", year: 2024, clients: 47 },
        { month: "August", year: 2024, clients: 49 },
        { month: "September", year: 2024, clients: 46 },
        { month: "October", year: 2024, clients: 51 },
        { month: "November", year: 2024, clients: 48 },
        { month: "December", year: 2024, clients: 53 },
        { month: "January", year: 2025, clients: 55 },
        { month: "February", year: 2025, clients: 52 },
        { month: "March", year: 2025, clients: 58 },
      ],
    },
    {
      name: "Dr. Naheem Mohmad",
      speciality: "Gynecologist",
      detailed_specialities: "Menopause Management, Hormone Replacement Therapy, Osteoporosis",
      location: "Port Elizabeth, Eastern Cape",
      exact_address: "Life St George's Hospital, 40 Park Dr, Port Elizabeth, 6001",
      profile_picture: "https://i.pinimg.com/736x/a3/1b/2e/a31b2ee2bdf3a8c5e65f99d935e64055.jpg",
      phone_number: "(041) 555-1111",
      email: "nomusa.mthembu@lifegeorge.co.za",
      years_of_experience: 7,
      total_patients_helped: 650,
      clients_per_month: [
        { month: "March", year: 2024, clients: 30 },
        { month: "April", year: 2024, clients: 32 },
        { month: "May", year: 2024, clients: 28 },
        { month: "June", year: 2024, clients: 35 },
        { month: "July", year: 2024, clients: 29 },
        { month: "August", year: 2024, clients: 33 },
        { month: "September", year: 2024, clients: 27 },
        { month: "October", year: 2024, clients: 34 },
        { month: "November", year: 2024, clients: 28 },
        { month: "December", year: 2024, clients: 36 },
        { month: "January", year: 2025, clients: 38 },
        { month: "February", year: 2025, clients: 35 },
        { month: "March", year: 2025, clients: 40 },
      ],
    },
  ]
  doctorsData = mockDoctorsData.filter((doctor) => doctor.speciality === "Gynecologist")
  selectedDoctorData = doctorsData.find((doctor) => doctor.name === "Dr. Sipho Dlamini") || doctorsData[0]
  if (selectedDoctorData) {
    renderDoctorsList()
    renderSelectedDoctorData()
    const timeFilterSelect = document.querySelector(".time-filter")
    const defaultMonth = timeFilterSelect.querySelector('option[value="March 2025"]')
      ? "March 2025"
      : timeFilterSelect.value
    setTimeout(() => updateDoctorsChart(defaultMonth), 100)
    renderOverviewStats()
  } else {
    showError("No gynecologist data found.")
  }
}

function showSection(sectionName) {
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active")
  })
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active")
  })
  document.getElementById(`${sectionName}-section`).classList.add("active")
  event.currentTarget.classList.add("active")
  if (sectionName === "overview") {
    renderOverviewStats()
  }
}

function toggleSearch() {
  const searchContainer = document.getElementById("searchContainer")
  const searchInput = document.getElementById("doctorSearch")
  if (searchContainer.style.display === "none") {
    searchContainer.style.display = "block"
    searchInput.focus()
  } else {
    searchContainer.style.display = "none"
    searchInput.value = ""
    renderDoctorsList()
  }
}

function searchDoctors() {
  const searchTerm = document.getElementById("doctorSearch").value.toLowerCase()
  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm) ||
      doctor.speciality.toLowerCase().includes(searchTerm) ||
      doctor.location.toLowerCase().includes(searchTerm),
  )
  renderDoctorsList(filteredDoctors)
}

function generateCalendar() {
  const calendarGrid = document.getElementById("calendarGrid")
  const currentMonthElement = document.getElementById("currentMonth")
  if (!calendarGrid || !currentMonthElement) return

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  currentMonthElement.textContent = `${months[currentCalendarMonth]} ${currentCalendarYear}`

  const firstDay = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay()
  const daysInMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate()
  const today = new Date()
  const currentMonthDate = new Date(today.getFullYear(), today.getMonth(), 1)
  const calendarMonthDate = new Date(currentCalendarYear, currentCalendarMonth, 1)

  let calendarHTML = ""
  const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  dayHeaders.forEach((day) => {
    calendarHTML += `<div class="calendar-day" style="font-weight: bold; background: #f8f9fa;">${day}</div>`
  })

  for (let i = 0; i < firstDay; i++) {
    calendarHTML += '<div class="calendar-day" style="color: #ccc;"></div>'
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      today.getDate() === day &&
      today.getMonth() === currentCalendarMonth &&
      today.getFullYear() === currentCalendarYear
    const isPastMonth = calendarMonthDate < currentMonthDate
    const isPastDayInCurrentMonth =
      !isPastMonth &&
      currentCalendarYear === today.getFullYear() &&
      currentCalendarMonth === today.getMonth() &&
      day < today.getDate()
    const todayClass = isToday ? "today" : ""
    const pastClass = isPastMonth || isPastDayInCurrentMonth ? "past-month-day" : ""
    const onClickHandler =
      isPastMonth || isPastDayInCurrentMonth
        ? ""
        : `onclick="openBookingModal(null, '${currentCalendarYear}-${String(currentCalendarMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}')"`
    calendarHTML += `<div class="calendar-day ${todayClass} ${pastClass}" ${onClickHandler}>${day}</div>`
  }
  calendarGrid.innerHTML = calendarHTML
}

function previousMonth() {
  if (currentCalendarMonth === 0) {
    currentCalendarMonth = 11
    currentCalendarYear--
  } else {
    currentCalendarMonth--
  }
  generateCalendar()
}

function nextMonth() {
  if (currentCalendarMonth === 11) {
    currentCalendarMonth = 0
    currentCalendarYear++
  } else {
    currentCalendarMonth++
  }
  generateCalendar()
}

function updateDoctorsChart(monthYear) {
  const [monthName, year] = monthYear.split(" ")
  const chartData = doctorsData
    .map((doctor) => {
      const clientData = doctor.clients_per_month.find((c) => c.month === monthName && c.year === Number.parseInt(year))
      return {
        name: doctor.name,
        clients: clientData ? clientData.clients : 0,
      }
    })
    .sort((a, b) => b.clients - a.clients)

  const ctx = document.getElementById("doctorsClientsChart")
  if (!ctx) return

  const labels = chartData.map((item) => item.name)
  const clients = chartData.map((item) => item.clients)

  if (doctorsClientsChart) {
    doctorsClientsChart.destroy()
  }

  doctorsClientsChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: `Clients in ${monthYear}`,
          data: clients,
          backgroundColor: "#01F0D0",
          borderColor: "#01F0D0",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleColor: "white",
          bodyColor: "white",
          borderColor: "rgba(255, 255, 255, 0.1)",
          borderWidth: 1,
          callbacks: {
            title: (context) => context[0].label,
            label: (context) => `Clients: ${context.parsed.y}`,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#6B7280" },
        },
        y: {
          beginAtZero: true,
          grid: { color: "rgba(0, 0, 0, 0.1)" },
          ticks: { color: "#6B7280", stepSize: 10 },
        },
      },
    },
  })
}

function renderDoctorsList(doctors = doctorsData) {
  const doctorsList = document.getElementById("doctorsList")
  if (!doctors || doctors.length === 0) {
    doctorsList.innerHTML = '<div class="error">No doctors found</div>'
    return
  }
  const doctorsHTML = doctors
    .map(
      (doctor) => `
            <div class="doctor-item ${doctor.name === selectedDoctorData?.name ? "active" : ""}"
                onclick="selectDoctor('${doctor.name}')">
                <img src="${doctor.profile_picture}" alt="${doctor.name}" class="doctor-avatar"
                    onerror="this.src='/placeholder.svg?height=48&width=48'">
                <div class="doctor-info">
                    <div class="doctor-name">${doctor.name}</div>
                    <div class="doctor-details-text">${doctor.speciality}, ${doctor.location}</div>
                </div>
                <button class="book-doctor-btn" onclick="event.stopPropagation(); openBookingModal('${doctor.name}')">Book</button>
            </div>
        `,
    )
    .join("")
  doctorsList.innerHTML = doctorsHTML
}

function renderSelectedDoctorData() {
  if (!selectedDoctorData) return
  renderDoctorProfile()
  renderOverviewStats()
}

function renderDoctorProfile() {
  const doctorProfile = document.getElementById("doctorProfile")
  doctorProfile.innerHTML = `
        <img src="${selectedDoctorData.profile_picture}" alt="${selectedDoctorData.name}" class="doctor-photo"
            onerror="this.src='/placeholder.svg?height=200&width=200'">
        <h2 class="doctor-name-title">${selectedDoctorData.name}</h2>
        <div class="doctor-info-grid">
            <div class="info-row">
                <div class="info-icon">👩‍⚕️</div>
                <div class="info-content">
                    <div class="info-label">Speciality</div>
                    <div class="info-value">${selectedDoctorData.speciality}</div>
                </div>
            </div>
            <div class="info-row">
                <div class="info-icon">📍</div>
                <div class="info-content">
                    <div class="info-label">Location</div>
                    <div class="info-value" style="cursor: pointer; text-decoration: underline;" onclick="openLocationDetailsModal('${selectedDoctorData.exact_address}')">${selectedDoctorData.location}</div>
                </div>
            </div>
            <div class="info-row">
                <div class="info-icon">📞</div>
                <div class="info-content">
                    <div class="info-label">Contact Info.</div>
                    <div class="info-value">${selectedDoctorData.phone_number}</div>
                </div>
            </div>
            <div class="info-row">
                <div class="info-icon">📧</div>
                <div class="info-content">
                    <div class="info-label">Email</div>
                    <div class="info-value">${selectedDoctorData.email}</div>
                </div>
            </div>
            <div class="info-row">
                <div class="info-icon">⭐</div>
                <div class="info-content">
                    <div class="info-label">Years of Experience</div>
                    <div class="info-value">${selectedDoctorData.years_of_experience}</div>
                </div>
            </div>
        </div>
        <button class="show-info-btn" onclick="openDoctorDetailsModal()">Show All Information</button>
    `
}

function selectDoctor(doctorName) {
  document.querySelectorAll(".doctor-item").forEach((item) => {
    item.classList.remove("active")
  })
  event.currentTarget.classList.add("active")
  const selected = doctorsData.find((doctor) => doctor.name === doctorName)
  if (selected) {
    selectedDoctorData = selected
    renderSelectedDoctorData()
    const currentMonthInChart = document.querySelector(".time-filter").value
    setTimeout(() => updateDoctorsChart(currentMonthInChart), 100)
  } else {
    alert(`Selected ${doctorName}. This doctor may not have complete data available.`)
  }
}

function downloadLabResult(labName) {
  alert(`Downloading ${labName}...\n\nNote: This is a demo implementation.`)
}

function renderOverviewStats() {
  const totalPatientsHelpedTitle = document.getElementById("totalPatientsHelpedTitle")
  const totalPatientsHelpedValue = document.getElementById("totalPatientsHelpedValue")

  // Calculate total patients helped by all doctors
  const totalPatientsAcrossAllDoctors = doctorsData.reduce(
    (sum, doctor) => sum + (doctor.total_patients_helped || 0),
    0,
  )

  totalPatientsHelpedTitle.textContent = "Total Patients Helped by All Doctors"
  totalPatientsHelpedValue.textContent = totalPatientsAcrossAllDoctors.toLocaleString()
}

function showError(message) {
  const doctorsList = document.getElementById("doctorsList")
  doctorsList.innerHTML = `<div class="error">Error: ${message}</div>`
  const doctorProfile = document.getElementById("doctorProfile")
  doctorProfile.innerHTML = `<div class="error">Error loading doctor data: ${message}</div>`
}

// --- Booking Modal Functions ---
function openBookingModal(doctorName = null, date = null) {
  const bookingModal = document.getElementById("bookingModal")
  const bookingDoctorSelect = document.getElementById("bookingDoctor")
  const bookingDateInput = document.getElementById("bookingDate")

  // Clear previous options and populate doctor dropdown
  bookingDoctorSelect.innerHTML = ""
  doctorsData.forEach((doctor) => {
    const option = document.createElement("option")
    option.value = doctor.name
    option.textContent = doctor.name
    bookingDoctorSelect.appendChild(option)
  })

  // Pre-select doctor if provided
  if (doctorName) {
    bookingDoctorSelect.value = doctorName
  } else if (selectedDoctorData) {
    // If no specific doctor, but one is selected in the sidebar, pre-select that one
    bookingDoctorSelect.value = selectedDoctorData.name
  } else {
    // Otherwise, select the first doctor in the list
    bookingDoctorSelect.selectedIndex = 0
  }

  // Pre-fill date if provided
  if (date) {
    bookingDateInput.value = date
  } else {
    // Clear date if not provided
    bookingDateInput.value = ""
  }

  bookingModal.style.display = "flex" // Show the modal
}

function closeBookingModal() {
  document.getElementById("bookingModal").style.display = "none" // Hide the modal
  document.getElementById("bookingForm").reset() // Reset the form fields
}

async function handleBookingSubmit(event) {
  event.preventDefault() // Prevent default form submission

  const doctor = document.getElementById("bookingDoctor").value
  const date = document.getElementById("bookingDate").value
  const patientName = document.getElementById("patientName").value
  const patientContact = document.getElementById("patientContact").value
  const reason = document.getElementById("reason").value

  try {
    const response = await fetch(`${BACKEND_API_URL}/submit-booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doctor,
        date,
        patientName,
        patientContact,
        reason,
      }),
    })

    const result = await response.json()

    if (response.ok) {
      alert(`Booking successful! ${result.message}`)
      closeBookingModal()
    } else {
      alert(`Booking failed: ${result.error || result.message}`)
    }
  } catch (error) {
    console.error("Error submitting booking:", error)
    alert("An error occurred while booking. Please try again.")
  }
}

// --- Doctor Details Modal Functions ---
function openDoctorDetailsModal() {
  const doctorDetailsModal = document.getElementById("doctorDetailsModal")
  const doctorDetailsContent = document.getElementById("doctorDetailsContent")

  if (!selectedDoctorData) {
    doctorDetailsContent.innerHTML = "<p>No doctor selected for details.</p>"
    doctorDetailsModal.style.display = "flex"
    return
  }

  doctorDetailsContent.innerHTML = `
        <img src="${selectedDoctorData.profile_picture}" alt="${selectedDoctorData.name}" onerror="this.src='/placeholder.svg?height=150&width=150'">
        <h3>${selectedDoctorData.name}</h3>
        <p><strong>Speciality:</strong> ${selectedDoctorData.speciality}</p>
        <p class="detailed-specialities">(${selectedDoctorData.detailed_specialities || "N/A"})</p>
        <p><strong>Location:</strong> ${selectedDoctorData.location}</p>
        <p><strong>Exact Address:</strong> ${selectedDoctorData.exact_address || "N/A"}</p>
        <p><strong>Contact:</strong> ${selectedDoctorData.phone_number}</p>
        <p><strong>Email:</strong> ${selectedDoctorData.email}</p>
        <p><strong>Years of Experience:</strong> ${selectedDoctorData.years_of_experience}</p>
        <p><strong>Total Patients Helped:</strong> ${selectedDoctorData.total_patients_helped.toLocaleString()}</p>
    `
  doctorDetailsModal.style.display = "flex"
}

function closeDoctorDetailsModal() {
  document.getElementById("doctorDetailsModal").style.display = "none"
}

// --- Location Details Modal Functions ---
function openLocationDetailsModal(address) {
  const locationDetailsModal = document.getElementById("locationDetailsModal")
  const exactLocationText = document.getElementById("exactLocationText")

  exactLocationText.textContent = address || "Address not available."
  locationDetailsModal.style.display = "flex"
}

function closeLocationDetailsModal() {
  document.getElementById("locationDetailsModal").style.display = "none"
}