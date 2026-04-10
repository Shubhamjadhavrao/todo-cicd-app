pipeline {
    agent any

    environment {
        IMAGE_NAME = "node-app-todo"
        CONTAINER_NAME = "node-app-container"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                url: "https://github.com/Shubhamjadhavrao/todo-cicd-app.git"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Clean Old Container') {
            steps {
                sh '''
                docker rm -f $(docker ps -aq --filter "name=node-app-container") || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d -p 8000:8000 --name node-app-container node-app-todo
                '''
            }
        }
    }
}