pipeline {
    agent any
    tools {nodejs "Nodejs"}
    stages {
        stage('Fix Permissions') {
            steps {
                sh 'sudo chown -R jenkins:jenkins "/var/lib/jenkins/workspace/React Fantacy"'
                sh 'sudo chmod -R 755 "/var/lib/jenkins/workspace/React Fantacy"'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install --legacy-peer-deps'
            }
        }
        stage('Deliver') {
            steps {
                sh 'chmod -R +rwx ./jenkins/scripts/deliver.sh'
                sh 'chmod -R +rwx ./jenkins/scripts/kill.sh'
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}