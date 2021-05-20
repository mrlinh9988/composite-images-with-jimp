pipeline {
  agent any
  triggers {
    githubPush()
  }
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/mrlinh9988/composite-images-with-jimp.git'
      }
    }
  }
}