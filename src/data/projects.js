export const PROJECTS = [
  {
    id: 'voting-system',
    title: 'Web-based Voting System for Award Nominations',
    tech: ['Java', 'Spring Boot', 'MS SQL Server'],
    description:
      'Built a web-based voting platform to support award nomination, user voting, and result management workflows.',
    githubUrl: 'https://github.com/kavindugayantha04/Voting-System-For-Award-Nominations.git',
    liveUrl: null,
    details:
      'End-to-end workflow for nominations and secure voting, with structured data storage and administrative controls for results.',
  },
  {
    id: 'medical-appointments',
    title: 'Medical Appointment Scheduling System',
    tech: ['Java', 'JSP', 'Servlets', 'HTML', 'CSS', 'File Handling'],
    description:
      'Built a web-based appointment scheduling system to manage patient bookings, doctor availability, and appointment records.',
    githubUrl: 'https://github.com/IT24103055/Project.git',
    liveUrl: null,
    details:
      'Focused on reliable booking flows, availability tracking, and persistent appointment records using file-based or server-side storage.',
  },
  {
    id: 'paddy-disease',
    title: 'Paddy Disease Classifier',
    tech: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'NumPy'],
    description:
      'Built a CNN-based deep learning model to classify paddy plant diseases from leaf images for agricultural disease detection.',
    githubUrl: 'https://github.com/kavindugayantha04/Paddy_Disease_Classifier-.git',
    liveUrl: null,
    details:
      'Convolutional neural network trained on leaf imagery, deployed behind a Streamlit interface for quick experimentation and demos.',
  },
  {
    id: 'mall-segmentation',
    title: 'Mall Customer Segmentation System',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy'],
    description:
      'Built a customer segmentation model using machine learning techniques to analyze customer behavior for business and marketing insights.',
    githubUrl: 'https://github.com/kavindugayantha04/Mall_Customers_kmeans.git',
    liveUrl: null,
    details:
      'Clustering and exploratory analysis packaged in a Flask app to explore segments and support marketing-oriented decisions.',
  },
  {
    id: 'home-automation',
    title: 'Home Automation System',
    tech: ['Arduino', 'Blynk', 'Bluetooth'],
    description:
      'Developed a smart home automation prototype to control door access, lighting, and fan operation.',
    /** Omit GitHub on this card only (hardware-focused project). */
    hideGithub: true,
    githubUrl: 'https://github.com/YOUR_USERNAME/home-automation',
    liveUrl: null,
    details:
      'Hardware prototype integrating sensors and wireless control for core home functions via Blynk and Bluetooth.',
  },
]
