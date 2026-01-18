pipeline {
    agent any

    environment {
        NODE_ENV = "production"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/waseemhajwane32/v0-four-elements-connect.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Export (Static Build)') {
            steps {
                bat 'npm run export'
            }
        }

        stage('Deploy to IIS Folder') {
            steps {
                echo 'Copying build files to IIS...'
                bat '''
                if exist "C:\\inetpub\\wwwroot\\v0-four-elements-connect" rmdir /S /Q "C:\\inetpub\\wwwroot\\v0-four-elements-connect"
                xcopy /E /I /Y .\\out "C:\\inetpub\\wwwroot\\v0-four-elements-connect"
                '''
            }
        }
    }
}
