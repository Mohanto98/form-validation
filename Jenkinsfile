pipeline {
  agent any
    stages {
      stage("build"){
            steps {
              echo "Building the application."
              script {
                def name = 'Subhajyoti'
                echo name
              }
            }
      }
    stage("test"){
            steps {
              echo "Testing the application."
            }
      }
    stage("deploy"){
            steps {
              echo "Deploying the application."
            }
      }
    }
}
