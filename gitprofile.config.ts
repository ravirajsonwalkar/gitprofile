// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ravirajsonwalkar', // Replace with your GitHub username
  },
  base: '/',
  social: {
    linkedin: 'raviraj-sonwalkar',
    email: 'raviwork2802@gmail.com',
  },
  resume: {
    fileUrl: 'https://www.dropbox.com/scl/fi/bggmffz9yguhql3s5w0bw/Raviraj_S_Resume-1.pdf?rlkey=evsu1oj3gliyvsz90lmnlia49&st=qfvzch1x&dl=1', // Add your resume URL here
  },
  skills: [
    'AI Frameworks',
    'AI in Software Development',
    'AI Agents',
    'Python',
    'NumPy',
    'Pandas',
    'Scikit-Learn',
    'Data Analysis',
    'Predictive Modeling',
    'Business Analytics'
  ],
  experiences: [
    {
      company: 'Oakland Natives Give Back',
      position: 'Data Scientist',
      from: 'July 2024',
      to: 'Present',
      companyLink: 'https://ongb.org/',
    },
    {
      company: 'East Sunshine Ventures',
      position: 'Venture Capital Intern',
      from: 'Mar 2024',
      to: 'June 2024',
      companyLink: 'https://www.eastsunshineventures.com/',
    },
    {
      company: 'FPL Technologies',
      position: 'Data Analyst, Customer Success',
      from: 'July 2021',
      to: 'April 2022',
      companyLink: 'https://www.fplabs.tech/',
    },
    {
      company: 'Amazon',
      position: 'Business Analyst, Customer Success',
      from: 'August 2020',
      to: 'March 2021',
      companyLink: 'https://www.aboutamazon.in/',
    }
  ],
  certifications: [
    {
      name: 'Multi AI Agent Systems with crewAI',
      body: '',
      year: '2024',
      link: 'https://learn.deeplearning.ai/accomplishments/5b553fe9-5c54-47c0-bf42-d66a160ad83a?usp=sharing',
    },
    {
      name: 'Building Generative AI Applications with Gradio',
      body: '',
      year: '2024',
      link: 'https://learn.deeplearning.ai/accomplishments/28b02d7d-ba94-40b9-838a-7d409bd71532?usp=sharing',
    },
    {
      name: 'Build Long-Context AI Apps with Jamba',
      body: '',
      year: '2024',
      link: 'https://learn.deeplearning.ai/accomplishments/32f53d07-c245-4be8-aad4-6da3378655d6?usp=sharing',
    },
    {
      name: 'AI Agents Fundamentals',
      body: '',
      year: '2024',
      link: 'https://cdn-lfs-us-1.hf.co/repos/f2/34/f2344151f60f6027c436821dc61cf3f27a46435de57df8df50ad02b5acca7c07/8a26afc4294cdfff0f1ea762212d93f0b3fd74bdc8b93d2bb47c74bb6ea8fc93?response-content-disposition=inline%3B+filename*%3DUTF-8%27%272025-02-11.png%3B+filename%3D%222025-02-11.png%22%3B&response-content-type=image%2Fpng&Expires=1740199158&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0MDE5OTE1OH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2YyLzM0L2YyMzQ0MTUxZjYwZjYwMjdjNDM2ODIxZGM2MWNmM2YyN2E0NjQzNWRlNTdkZjhkZjUwYWQwMmI1YWNjYTdjMDcvOGEyNmFmYzQyOTRjZGZmZjBmMWVhNzYyMjEyZDkzZjBiM2ZkNzRiZGM4YjkzZDJiYjQ3Yzc0YmI2ZWE4ZmM5Mz9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=oYskHVGrWv6cpiuo6XacLOv6vlwb0FVY1WYvmTIHYA1gFpO2XHeXsuMSaYVTwXwGdJhDAmMu3dSkLOP0qmKILTt4c-sR0dIOkk3tlLaqwbOfoeyynYBZkNUPfkSMZ8AW%7E7KxTxyHR9R-X9OmbHLficnxgCb3OALX1uWgVqwOs7zJNwVKeKwvxLDiMZudo3s4YLkNgh9ZSyFXNqVCmybIY2ariPxAow6b9CQJOTbVv%7EbxJAwLSNcaoknVv%7Ene-Utam-YheeYl85j59vdBkDG7tZMLTMj-60Bd90uQ7jRa8h9Zq4IYgxHzMk3Tf78QpXcvJ%7Eb1MCGig%7ETDQx342P86tg__&Key-Pair-Id=K24J24Z295AEI9',
    }
  ],
  educations: [
    {
      institution: 'Hult International Business School',
      degree: 'Master of Science - MS, Business Analytics',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Hult International Business School',
      degree: 'Master of Science - MS, International Business',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Haroun Education Ventures MBA Degree Program',
      degree: 'Master of Business Administration - MBA',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'MIT ADT University',
      degree: "Bachelor's degree, Civil Engineering",
      from: '2017',
      to: '2020',
    }
  ],
  seo: {
    title: 'Portfolio of Raviraj Sonwalkar',
    description: 'Data Scientist and VC professional with expertise in AI Engineering and Business analytics',
  },
  themeConfig: {
    defaultTheme: 'corporate',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    themes: [
      'light',
      'dark',
      'corporate',
      'luxury',
      'business',
    ],
  },
};

export default CONFIG;
