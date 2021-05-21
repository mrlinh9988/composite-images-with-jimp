pipeline {
    agent {}
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
