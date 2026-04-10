pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins/jenkins:lts"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                echo "Code Clone Stage"
                git url: "https://github.com/Shubhamjadhavrao/todo-cicd-app.git"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh 'docker rm -f node-app-container || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8000:8000 --name node-app-container $IMAGE_NAME'
            }
        }
    }
}