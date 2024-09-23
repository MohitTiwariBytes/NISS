import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, update, onValue } from "firebase/database";
import emailjs from "emailjs-com";

const firebaseConfig = {
  apiKey: "AIzaSyAoRPAmfJcsA8brCPshGMtDPOZk5wq-Tow",
  authDomain: "niss-56a8e.firebaseapp.com",
  projectId: "niss-56a8e",
  storageBucket: "niss-56a8e",
  messagingSenderId: "402011156491",
  appId: "1:402011156491:web:f9dcdc8d17f9add4f3570e",
  measurementId: "G-1GVBGZ9WRZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

// Writing data when a project is submitted
function writeData(name, email, services, budget, message) {
  const now = new Date();
  const projectId = now.getTime().toString(); // Unique ID based on timestamp
  const projectDate = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;

  set(ref(database, "projects/" + projectId), {
    name: name,
    email: email,
    services: services,
    budget: budget,
    message: message,
    status: "Waiting Confirmation", // Initial project status
    date: projectDate,
  });

  sendEmail(name, email, services, budget, message);
}

function writeDataEntry(index, data) {
  set(ref(database, "dataEntry/" + index), data)
    .then(() => {
      console.log("Data saved successfully at index:", index);
    })
    .catch((error) => {
      console.error("Failed to save data:", error);
    });
}

// Fetching all projects from the database
function fetchProjects(callback) {
  const projectsRef = ref(database, "projects/");
  onValue(projectsRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

// Updating project status
function updateProjectStatus(projectId, newStatus) {
  const projectRef = ref(database, "projects/" + projectId);
  update(projectRef, {
    status: newStatus,
  });
}

// Email function remains the same as before
function sendEmail(name, email, services, budget, message) {
  const serviceId = "service_ee88k5s";
  const templateId = "template_oeyezbi";
  const userId = "5Q-JYLypQp2WfpdhD";

  const formattedMessage = `
      Name: ${name}

      Contact-Email: ${email}

      Services needed: ${services}

      Budget: ${budget}

      Message: 
      
      ${message}
    `;

  const templateParams = {
    from_name: name,
    from_email: email,
    to_email: "newindiasoftwaresolutions@gmail.com",
    message: formattedMessage,
  };

  emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((error) => {
      console.error("Failed to send email.", error);
    });
}

export { writeData, fetchProjects, updateProjectStatus, writeDataEntry };
