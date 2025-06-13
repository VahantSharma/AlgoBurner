# AlgoBurner 🔥

**The ultimate LeetCode statistics roaster** - Because your coding stats deserve the brutal truth!

AlgoBurner is a fun web application that takes your LeetCode username and serves up some savage (but friendly) roasts based on your problem-solving statistics. Built with modern web technologies and a dash of humor.

## 🚀 Features

- **Real LeetCode API Integration**: Fetches actual user statistics from LeetCode
- **Savage Roasts**: Get hilariously roasted based on your real performance
- **Beautiful Charts**: Visualize your problem-solving statistics
- **Error Handling**: Graceful handling of API failures and invalid usernames
- **Social Sharing**: Share your roast on LinkedIn and Twitter
- **Responsive Design**: Looks great on all devices
- **Dark Theme**: Easy on the eyes, hard on your ego

## 🛠️ Tech Stack

This project is built with modern web technologies:

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Recharts** - Data visualization
- **Lucide React** - Icons

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/VahantSharma/AlgoBurner.git
   cd AlgoBurner
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the application running.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 How It Works

1. **Enter Username**: Input your LeetCode username
2. **API Fetch**: The app fetches your real statistics from LeetCode via the [LeetCode Stats API](https://leetcode-stats-api.herokuapp.com)
3. **Get Roasted**: Receive a humorous roast based on your actual performance
4. **View Charts**: See beautiful visualizations of your real stats
5. **Share**: Post your roast on social media if you dare!

## 🔌 API Integration

This project uses the **LeetCode Stats API** to fetch real user data:
- **Endpoint**: `https://leetcode-stats-api.herokuapp.com/{username}`
- **Data**: Total solved, difficulty breakdown, acceptance rate, ranking, etc.
- **Error Handling**: Graceful fallback for API failures or invalid usernames

## 🎮 Try It Out

Want to test the app? Try these usernames:
- `leetcode` - LeetCode's official account
- `your-username` - Enter your own LeetCode username!

**Note**: Make sure your LeetCode profile is public for the API to fetch your stats.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vahant Sharma**

- GitHub: [@VahantSharma](https://github.com/VahantSharma)
- LinkedIn: [vahant-sharma](https://www.linkedin.com/in/vahant-sharma/)
- LeetCode: [Vahant_Sharma](https://leetcode.com/u/Vahant_Sharma/)

## 🙏 Acknowledgments

- Thanks to all the developers who get roasted by this app
- Built with ❤️ and a lot of coffee
- Special thanks to the LeetCode community for inspiration

---

_Made with 🔥 by Vahant Sharma_
