# Changelog

All notable changes to AlgoBurner will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-06-14

### Added
- 🚀 **Real LeetCode API Integration**: Now fetches actual user statistics from LeetCode Stats API
- 🔧 **Enhanced Error Handling**: Graceful handling of API failures, timeouts, and invalid usernames
- ⚡ **Request Timeout**: 10-second timeout for API requests with proper error messages
- 🎯 **Data Validation**: Validates API responses to ensure data integrity
- 📊 **Extended Statistics**: Support for total questions breakdown by difficulty
- 🔄 **Fallback System**: Development fallback to mock data when API is unavailable
- 🌐 **Environment Configuration**: Configurable API endpoints via environment variables

### Changed
- 🎨 **Enhanced Roast Messages**: More diverse and data-driven roasts based on real stats
- 📝 **Improved User Guidance**: Better form placeholders and error messages
- 🔄 **Loading States**: Updated loading messages to reflect real API calls
- 📚 **Documentation**: Updated README with API integration details and testing guide

### Technical
- 🏗️ **Service Architecture**: Clean separation of API logic into dedicated service
- 🔒 **Type Safety**: Comprehensive TypeScript interfaces for API responses
- 🚀 **Performance**: Optimized API calls with proper timeout handling
- 🧪 **Error Boundaries**: Robust error handling throughout the application

## [1.0.0] - 2025-06-14

### Added
- Initial release of AlgoBurner 🔥
- LeetCode username input form with validation
- Mock data generation for demonstration purposes
- Savage roast message generation based on stats
- Beautiful data visualizations using Recharts:
  - Problem difficulty distribution chart
  - Acceptance rate progress indicator
- Social sharing functionality for LinkedIn and Twitter
- Responsive design with dark theme
- Modern UI components using shadcn/ui
- TypeScript support throughout the application
- Comprehensive documentation (README, CONTRIBUTING)
- MIT License
- SEO optimization with meta tags
- PWA manifest for web app capabilities

### Technical Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- Recharts for data visualization
- React Router for navigation
- Lucide React for icons
- ESLint for code quality

### Developer

- Created by Vahant Sharma
- GitHub: [@VahantSharma](https://github.com/VahantSharma)
- LeetCode: [Vahant_Sharma](https://leetcode.com/u/Vahant_Sharma/)

### Future Enhancements

- Real LeetCode API integration
- User authentication and profile management
- Enhanced roast algorithms
- Additional chart types and visualizations
- Roast history and favorites
- More social media platform integrations
