pipeline {
    agent { docker { image 'node:14-alpine' } }
    triggers {
      githubPush()
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
