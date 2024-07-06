pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'us-east-2'  
        S3_BUCKET_NAME = 'my-frontend-s3' 
    }

    stages {
        stage('Git checkout') {
            steps {
                git branch'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'ng build'
            }
        }


        stage('Deploy to s3') {
            steps {
                sh "aws s3 sync dist/hadiya_products_admin/ s3://${S3_BUCKET_NAME} --delete --exact-timestamps"
            }
        }
        


        
    }
}
