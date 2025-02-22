// Get the project name from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const projectName = urlParams.get('project');

// Define project details
const projectData = {
    fun_fun_rehabilitation_2: {
            title: "Fun Fun Rehabilitation 2.0",
            content1: "The updated version, FunFunRehabilitation 2.0, is now a web-based application, offering even greater mobility and accessibility. ",
            content2: "his version introduces new features such as progress tracking reports, an AI-powered chatbot for assistance, and more customization options to enhance the user experience.",
            videoURL: "https://www.youtube.com/embed/SV-AYH1U0jo?si=ujAAhbQs9iBQlaW_",
    },


    fun_fun_rehabilitation: {
        title: "Fun Fun Rehabilitation",
        content1: "FunFunRehabilitation is a gamified rehabilitation application designed specifically for low-income stroke patients. It saves time by allowing therapy sessions to be completed anywhere, offering flexibility and convenience.",
        content2: "The app features customizable backgrounds, sound effects, and motivational encouragement upon task completion. It also integrates engaging games to make the rehabilitation process enjoyable and effective.",
        videoURL: "https://www.youtube.com/embed/SV-AYH1U0jo?si=ujAAhbQs9iBQlaW_",
    },
    better_plan: {
        title: "Better Plan",
        content1: "BetterPlan is a web app tailored for SMEs to simplify invoice management. Users can upload invoices to Google Drive, where the app scans and transfers the data into Google Sheets. From there, the app retrieves the data for management via a user-friendly interface, enabling actions such as adding, editing, or deleting invoices. ",
        content2: "BetterPlan also generates visualized reports, such as identifying high-performing products, and includes an auto-generated PowerPoint feature that creates presentations based on user preferences, including themes, topics, and content. Moreover, it can assist in drafting professional emails, making communication and reporting more efficient for staff.",
        videoURL: "https://www.youtube.com/embed/s2LtycCoFOk?si=Ntwni03RZuDMkoUX",
    },
    farm_game: {
        title: "Farm Game",
        content1: "Farm Game is an educational game designed to teach young adults about financial management. Players start with nine plots of land to manage. Each crop has a unique cost to plant and varying selling prices depending on the season. ",
        content2: "Players can mortgage their plots to secure loans for expansion. However, failure to repay the loan will result in locked plots, preventing further planting. This game challenges players to plan carefully, adapt to changing market conditions, and make smart financial decisions.",
        videoURL: "https://www.youtube.com/embed/16FL4YdMQ5Y?si=5ZSvFkXs1FTp1nII",
    },
    chef_pa: {
        title: "Chef Pa",
        content1: "Chef Pa is a cooking chatbot powered by the Gemini API. It tailors recipes based on available ingredients, provides YouTube cooking tutorials, and suggests substitutes for missing items. Whether planning meals for friends with different portion preferences or celebrating occasions like Christmas or Hari Raya, Chef Pa offers diverse recipe ideas. ",
        content2: "It supports multiple cuisines and helps reduce food waste by designing recipes using leftover ingredients in your fridge. The bot delivers step-by-step instructions and shares cooking tips to enhance your skills in the kitchen.Throughout the development journey, Chef Pa underwent several design iterations, from an HTML-based interface to Python Tkinter and finally to Streamlit. Each version improved upon the last, ensuring a user-friendly experience with modern features.",
        videoURL: "https://www.youtube.com/embed/1rqkNWREJ5Q?si=JUPaopZOphg82Yu6",
    }
};

// Check if the projectName exists in the projectData object
const project = projectData[projectName];

// If the project exists, dynamically update the page
if (project) {
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("content1").textContent = project.content1;
    document.getElementById("content2").textContent = project.content2;

    // Update images
    document.getElementById("image1").src = `images/image1_${projectName}.jpg`;
    document.getElementById("image2").src = `images/image2_${projectName}.jpg`;
    document.getElementById("image3").src = `images/image3_${projectName}.jpg`;
    document.getElementById("image4").src = `images/image4_${projectName}.jpg`;
    document.getElementById("image5").src = `images/image5_${projectName}.jpg`;


    // Update video
    document.getElementById("youtube-video").src = project.videoURL;
} else {
    // Handle case where the project is not found
    document.getElementById("project-title").textContent = "Project Not Found";
    document.getElementById("content1").textContent = "The selected project could not be found.";
    document.getElementById("content2").textContent = "";
    document.getElementById("youtube-video").style.display = "none"; // Hide the video if the project is not found
}
