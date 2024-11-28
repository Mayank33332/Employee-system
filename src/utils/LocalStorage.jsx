const employees = [
    {
      id: 1,
      name: "John Doe",
      password: "123",
      tasks: {
        title: "Complete Report",
        description: "Prepare the financial report for Q4",
        task_date: "2024-11-26",
        category: "Finance",
        active: 1,
        newTask: 1,
        completed: 0, 
        failed: 1,
      },
      taskscount: [
        {
          title: "Complete Report",
          description: "Prepare the financial report for Q4",
          task_date: "2024-11-26",
          category: "Finance",
          active: true,
          completed: false,
          failed: false,
          newTask: true,
        },
        {
          title: "Team Discussion",
          description: "Discuss project updates with the team",
          task_date: "2024-11-27",
          category: "Meetings",
          active: false,
          completed: true,
          failed: false,
          newTask: false,
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      password: "123",
      tasks: {
        title: "Code Review",
        description: "Review the codebase for errors",
        task_date: "2024-11-26",
        category: "Development",
        active: 2,
        newTask: 0,
        completed: 1,
        failed: 0,
      },
      taskscount: [
        {
          title: "Code Review",
          description: "Review the codebase for errors",
          task_date: "2024-11-26",
          category: "Development",
          active: true,
          completed: false,
          failed: false,
          newTask: true,
        },
        {
          title: "Prepare Slides",
          description: "Create slides for the upcoming seminar",
          task_date: "2024-11-28",
          category: "Marketing",
          active: false,
          completed: true,
          failed: false,
          newTask: false,
        },
      ],
    },
    {
      id: 3,
      name: "Michael Johnson",
      password: "123",
      tasks: {
        title: "Database Maintenance",
        description: "Optimize database performance",
        task_date: "2024-11-26",
        category: "Database",
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 1,
      },
      taskscount: [
        {
          title: "Database Maintenance",
          description: "Optimize database performance",
          task_date: "2024-11-26",
          category: "Database",
          active: true,
          completed: false,
          failed: true,
          newTask: false,
        },
        {
          title: "System Health Check",
          description: "Ensure all systems are stable",
          task_date: "2024-11-29",
          category: "IT",
          active: true,
          completed: false,
          failed: false,
          newTask: true,
        },
      ],
    },
  ];
  

const admin = [
    {
        "id": "admin001",
        "name": "Admin User",
        "password": "123"
    }
];

export const Setlocalstrg = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const Getlocalstrg = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
};
