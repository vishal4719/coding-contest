# 🚀 Secure Online Coding Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Java](https://img.shields.io/badge/Java-17+-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0+-green.svg)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-1.20+-326CE5.svg)](https://kubernetes.io/)
[![RabbitMQ](https://img.shields.io/badge/RabbitMQ-3.8+-FF6600.svg)](https://www.rabbitmq.com/)

A **high-performance, secure online coding platform** designed for conducting coding tests and assessments. Built with enterprise-grade security features, anti-cheating mechanisms, and scalable microservices architecture to handle concurrent users efficiently.

## ✨ Key Features

### 🔐 **Admin Control & Security**
- **Domain-based Access Control**: Admin sets authorized domains for user registration
- **User Management**: Enable/disable signup and login functionality
- **Test Creation & Management**: Create coding questions with custom test cases
- **Test Link Generation**: Generate secure, time-limited test links
- **Launch Control**: Admin controls when tests go live

### 🛡️ **Anti-Cheating Mechanisms**
- **Window Focus Detection**: Warns users when switching tabs/windows
- **Copy-Paste Prevention**: Disabled clipboard operations during tests
- **Right-Click Disabled**: Prevents access to developer tools/inspect element
- **Browser Lockdown**: Restricts developer mode access
- **Session Monitoring**: Real-time user activity tracking

### ⚡ **High Performance**
- **15+ Concurrent Submissions** handled simultaneously
- **300-450 Submissions/Minute** processing capacity
- **18,000-27,000 Submissions/Hour** at peak performance
- **Auto-scaling Workers** with Kubernetes orchestration
- **RabbitMQ Load Balancing** for optimal resource distribution

### 🎯 **Technical Excellence**
- **Multi-language Support**: 40+ programming languages via Judge0
- **Real-time Code Execution**: Instant compilation and testing
- **Automated Test Cases**: Custom test case evaluation
- **Microservices Architecture**: Scalable and maintainable design
- **Cloud-Native**: Kubernetes-ready deployment

## 🏗️ System Architecture & Flow

![Platform Architecture](./docs/images/platform-architecture.png)

### Complete User Journey

```mermaid
flowchart TD
    A[Admin Sets Domain] --> B[Users Register/Login]
    B --> C{Admin Controls Access}
    C -->|Enabled| D[User Dashboard]
    C -->|Disabled| E[Access Denied]
    
    D --> F[Admin Creates Questions]
    F --> G[Admin Generates Test Link]
    G --> H[Admin Launches Test]
    H --> I[User Accesses Test]
    
    I --> J[Security Checks Activated]
    J --> K[Window Focus Monitor]
    J --> L[Copy/Paste Disabled]
    J --> M[Right-Click Disabled]
    J --> N[Developer Tools Blocked]
    
    I --> O[User Writes Code]
    O --> P[Code Submitted to Queue]
    P --> Q[RabbitMQ Load Balancer]
    Q --> R[Multiple Workers Process]
    R --> S[Judge0 Execution]
    S --> T[Results Stored]
    T --> U[Real-time Feedback]
```

### Microservices Architecture

```mermaid
graph TB
    subgraph "Frontend Security Layer"
        A[React Admin Panel]
        B[Secure Test Interface]
        C[Anti-Cheat Monitor]
    end
    
    subgraph "API Gateway & Auth"
        D[Spring Boot Backend]
        E[Domain Controller]
        F[User Management]
        G[Test Controller]
    end
    
    subgraph "Message Queue System"
        H[RabbitMQ Broker]
        I[Submission Queue]
        J[Result Queue]
        K[Notification Queue]
    end
    
    subgraph "Worker Pool (Auto-Scaling)"
        L[Code Execution Worker 1]
        M[Code Execution Worker 2]
        N[Code Execution Worker N]
        O[Test Case Worker Pool]
    end
    
    subgraph "External Services"
        P[Judge0 API v1.13.0]
        Q[40+ Language Compilers]
    end
    
    subgraph "Data Layer"
        R[MongoDB Cluster]
        S[User Collection]
        T[Questions Collection]
        U[Submissions Collection]
        V[Results Collection]
    end
    
    subgraph "Infrastructure"
        W[Kubernetes Cluster]
        X[Auto-Scaling Pods]
        Y[Load Balancer]
    end
    
    A --> D
    B --> D
    C --> D
    D --> H
    H --> L
    H --> M
    H --> N
    H --> O
    L --> P
    M --> P
    N --> P
    O --> P
    L --> R
    M --> R
    N --> R
    O --> R
    D --> R
    
    W --> X
    X --> D
    X --> H
    X --> L
    X --> M
    X --> N
```

## 🔐 Admin Features & Controls

### Domain Management
![Admin Dashboard](./docs/images/admin-dashboard.png)

**Key Admin Functions:**
- Set authorized email domains for user registration
- Toggle user registration and login on/off
- Create coding questions with multiple test cases
- Generate secure test links with expiration times
- Launch tests when ready for users
- Monitor real-time test activities
- View detailed analytics and performance metrics

### Test Management Flow
**1. Question Creation**
- Define problem statements and descriptions
- Set difficulty levels and time limits
- Create comprehensive test cases
- Configure scoring parameters

**2. Test Link Generation**
- Generate unique, secure test URLs
- Set validity periods and attempt limits
- Configure test duration and parameters
- Enable/disable specific questions

**3. Test Launch Control**
- Activate tests when ready
- Set start and end times
- Monitor active test sessions
- Emergency stop capabilities

## 🛡️ Security Implementation

### Anti-Cheating Features
![Security Dashboard](./docs/images/security-features.png)

**Browser Security:**
- Real-time window focus monitoring
- Automatic warnings for tab switching
- Complete clipboard operation blocking
- Right-click context menu disabled
- Developer tools access prevention
- Keyboard shortcut restrictions

**Session Security:**
- Full-screen mode enforcement
- Screen sharing detection
- Multiple window prevention
- Activity logging and monitoring
- Suspicious behavior alerts
- Automated session termination

**Backend Security:**
- JWT token-based authentication
- Role-based access control (RBAC)
- API rate limiting protection
- Input validation and sanitization
- SQL injection prevention
- XSS protection headers

## 🚀 Performance Metrics

### Real-World Performance
![Performance Metrics](./docs/images/performance-metrics.png)

| Metric | Value | Description |
|--------|-------|-------------|
| **Concurrent Users** | 15+ | Simultaneous active test takers |
| **Submission Rate** | 300-450/min | Code submissions processed per minute |
| **Hourly Capacity** | 18K-27K | Maximum submissions per hour |
| **Response Time** | <200ms | Average API response time |
| **Code Execution** | 2-8s | Average compilation time |
| **Auto-scaling** | 2-20 pods | Dynamic worker scaling |

### Load Balancing Architecture
**RabbitMQ Configuration:**
- High-performance message broker setup
- Multiple worker queues for parallel processing
- Automatic queue management and scaling
- Dead letter queue handling
- Message persistence and reliability
- Cluster-ready configuration

**Kubernetes Auto-scaling:**
- Horizontal Pod Autoscaler (HPA) configured
- CPU and memory-based scaling triggers
- Minimum 2 pods, maximum 20 pods per service
- Rolling updates with zero downtime
- Resource quotas and limits enforced

## 📊 Tech Stack Deep Dive

### Core Technologies
![Tech Stack](./docs/images/tech-stack.png)

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **Backend** | Spring Boot | 3.0+ | REST API, Business Logic |
| **Frontend** | React | 18+ | User Interface, Admin Panel |
| **Database** | MongoDB | 6.0+ | Document Storage |
| **Message Queue** | RabbitMQ | 3.8+ | Load Balancing, Task Distribution |
| **Code Execution** | Judge0 API | v1.13.0 | Multi-language Compilation |
| **Orchestration** | Kubernetes | 1.20+ | Container Management |
| **Containerization** | Docker | 20.10+ | Application Packaging |

### Supported Programming Languages
**Popular Languages:**
- Python 3.8.1
- JavaScript (Node.js) 12.14.0
- Java 13.0.1
- C++ 9.2.0
- C 9.2.0
- Go 1.13.5
- Ruby 2.7.0
- Rust 1.40.0

**Total: 40+ Programming Languages** supported through Judge0 API integration.

## 🚀 Quick Start

### Prerequisites
![Installation Requirements](./docs/images/prerequisites.png)

**Required Software:**
- Docker 20.10+
- Kubernetes 1.20+ (Minikube for local development)
- kubectl CLI tool
- Java 17+
- Node.js 16+
- Maven 3.6+

### 🐳 Docker Compose Setup

**1. Clone Repository**
```bash
git clone https://github.com/yourusername/secure-coding-platform.git
cd secure-coding-platform
```

**2. Start All Services**
```bash
docker-compose up -d
```

**3. Verify Services**
```bash
docker-compose ps
```

**4. Access Platform**
- Admin Panel: http://localhost:3000/admin
- Test Interface: http://localhost:3000/test
- RabbitMQ Management: http://localhost:15672

### ☸️ Kubernetes Deployment

**1. Cluster Setup**
```bash
minikube start --memory=8192 --cpus=4
minikube addons enable ingress
minikube addons enable metrics-server
```

**2. Deploy Platform**
```bash
kubectl create namespace coding-platform
kubectl apply -f kubernetes/
```

**3. Monitor Deployment**
```bash
kubectl wait --for=condition=available --timeout=600s deployment --all -n coding-platform
kubectl get pods -n coding-platform
```

## 🔧 Configuration

### Environment Variables

**Backend Configuration:**
- SPRING_PROFILES_ACTIVE=production
- MONGODB_URI=mongodb://mongodb:27017/secure_coding_platform
- RABBITMQ_HOST=rabbitmq
- RABBITMQ_PORT=5672
- JUDGE0_API_URL=http://judge0:2358
- JWT_SECRET=your-256-bit-secret

**Frontend Configuration:**
- REACT_APP_API_URL=http://localhost:8080
- REACT_APP_WS_URL=ws://localhost:8080/ws
- REACT_APP_SECURITY_MODE=strict
- REACT_APP_FULLSCREEN_REQUIRED=true

### Kubernetes Auto-scaling Configuration

**Worker Auto-scaling:**
- Minimum replicas: 2
- Maximum replicas: 20
- CPU utilization target: 70%
- Memory utilization target: 80%
- Scale-up stabilization: 0 seconds
- Scale-down stabilization: 300 seconds

## 📊 Monitoring & Analytics

### Real-time Dashboard
![Monitoring Dashboard](./docs/images/monitoring-dashboard.png)

**System Metrics:**
- Active user sessions
- Queued submissions count
- Processing submissions status
- Completed submissions total
- Average execution times
- Success/failure rates
- Worker pod status

**Performance Monitoring:**
- API response times
- Database query performance
- RabbitMQ queue lengths
- Memory and CPU usage
- Network throughput
- Error rates and alerts

### Health Checks

**Application Health:**
- Spring Boot Actuator endpoints
- Database connectivity status
- RabbitMQ broker status
- Judge0 API availability
- Kubernetes pod readiness
- Service discovery status

## 🧪 Testing & Quality Assurance

### Load Testing Results
![Load Testing](./docs/images/load-testing.png)

**Performance Benchmarks:**
- 50 virtual users sustained
- 5-minute test duration
- Average response time: 145ms
- Median response time: 120ms
- Maximum response time: 2.1s
- Request rate: 300-450 req/min
- Concurrent submissions: 15 users

### Security Testing

**Security Checklist:**
- ✅ XSS Protection implemented
- ✅ CSRF Protection enabled
- ✅ SQL Injection prevention
- ✅ Developer tools blocking
- ✅ Copy/paste prevention
- ✅ Window focus detection
- ✅ Input validation
- ✅ Authentication testing
- ✅ Authorization testing
- ✅ Session management

## 🛠️ Troubleshooting

### Common Issues & Solutions

**High Queue Processing Time:**
- Scale up worker pods using Kubernetes HPA
- Check RabbitMQ broker performance
- Monitor Judge0 API response times
- Verify network connectivity between services

**Memory Issues:**
- Monitor pod memory usage with kubectl top
- Increase memory limits in deployment specs
- Check for memory leaks in application logs
- Scale horizontally instead of vertically

**Judge0 Connection Problems:**
- Test connectivity from backend pods
- Verify Judge0 service status
- Check network policies and firewall rules
- Restart Judge0 deployment if necessary

**Database Performance:**
- Monitor MongoDB query performance
- Check index usage and optimization
- Verify connection pool settings
- Scale MongoDB replica set if needed

## 📚 API Documentation

### Admin APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/domain` | Set authorized domain |
| PUT | `/api/admin/users/toggle` | Enable/disable user access |
| POST | `/api/admin/questions` | Create coding question |
| POST | `/api/admin/test-links` | Generate test link |
| PUT | `/api/admin/test-links/{id}/launch` | Launch test |
| GET | `/api/admin/metrics` | Get platform metrics |
| GET | `/api/admin/users` | List all users |
| DELETE | `/api/admin/users/{id}` | Delete user account |

### User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |
| GET | `/api/test/{token}` | Access test by token |
| POST | `/api/submissions` | Submit code |
| GET | `/api/submissions/{id}` | Get submission result |
| GET | `/api/languages` | List supported languages |
| POST | `/api/auth/logout` | User logout |

### WebSocket Events

**Real-time Communication:**
- SUBMISSION_RESULT: Code execution results
- SECURITY_WARNING: Anti-cheat alerts
- TIME_WARNING: Test time remaining alerts
- CONNECTION_STATUS: WebSocket connection status
- ADMIN_NOTIFICATION: Admin broadcast messages

## 🎯 Roadmap & Future Enhancements

**Planned Features:**
- **AI-Powered Code Analysis** - Advanced plagiarism detection
- **Video Proctoring** - Webcam monitoring during tests
- **Advanced Analytics** - Detailed performance insights and reporting
- **Multi-tenant Architecture** - Support for multiple organizations
- **Mobile Applications** - Native iOS and Android apps
- **Integration APIs** - LMS and HR system integrations
- **Custom Judge Environment** - Support for specialized testing environments
- **Blockchain Certificates** - Immutable test completion certificates

**Performance Improvements:**
- Edge computing for global deployment
- Advanced caching strategies
- Database sharding for scale
- CDN integration for static assets

## 🤝 Contributing

We welcome contributions from the community! Please follow our contribution guidelines:

**How to Contribute:**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests for new features
5. Submit a pull request

**Development Setup:**
1. Clone the forked repository
2. Run the development setup script
3. Start local development environment
4. Run tests before submitting

**Code Standards:**
- Follow Google Java Style Guide for backend
- Use Prettier for frontend code formatting
- Write meaningful commit messages
- Include unit tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for complete details.

## 🙏 Acknowledgments

Special thanks to these amazing **open-source projects** that make this platform possible:

- **[Judge0](https://github.com/judge0/judge0)** - Open-source online code execution system that powers our multi-language support
- **[RabbitMQ](https://www.rabbitmq.com/)** - The most widely deployed open-source message broker enabling our load balancing
- **[Kubernetes](https://kubernetes.io/)** - Container orchestration platform for scalable deployment
- **[Spring Boot](https://spring.io/projects/spring-boot)** - Powerful Java framework for backend services
- **[React](https://reactjs.org/)** - Modern frontend library for building interactive user interfaces
- **[MongoDB](https://www.mongodb.com/)** - Flexible document database for data persistence

## 📞 Support & Community

**Get Help:**
- 📧 **Email Support**: support@codingplatform.com
- 💬 **Community Discord**: [Join our community](https://discord.gg/codingplatform)
- 📖 **Full Documentation**: [Complete docs](https://docs.codingplatform.com)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/yourusername/secure-coding-platform/issues)

**Performance Highlights:**
- Handles **18K-27K submissions per hour**
- Supports **15+ concurrent users**
- Processes **300-450 submissions per minute**
- Auto-scales from **2 to 20 worker pods**

---

<div align="center">
  <strong>🚀 Built for Scale • 🔒 Secured by Design • 🌟 Powered by Open Source</strong>
  <br>
  <em>Developed with ❤️ for the coding community</em>
</div>
