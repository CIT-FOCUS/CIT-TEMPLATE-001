# Template: CIT-Template-001
## Template shortcuts
* UI5 webapp
* UI5-Tooling as main dependency
* MTA result with mbt-build
* [sap/approuter](https://www.npmjs.com/package/@sap/approuter) is wrapping the webapp
* CI/CD: github actions + gitlab pipeline examples

## Template description
This repository is a demo repository to use SAP UI5-Tooling module, a ui5.yaml file to define the libraries and middlewares for local development + build and a mta.yaml to build an application you can deploy into an container on a Cloud Foundry environment.  
The UI5.yaml is used to build all necessary dependencies, but the zip file will be generated by MTA / mbt build. This file will be used to deploy it into the container.  

This template is containg his own [sap/approuter](https://www.npmjs.com/package/@sap/approuter) module and therefore, the webapp will not be deployed to a HTML5 service on CF - it remains in the webapp folder of the approuter.  
The approuter is acting as kind of wrapper around the html5 webapp.  

## Requirements
* You're required to have [ui5/cli](https://www.npmjs.com/package/@ui5/cli) installed localy on your device / IDE. If you're using the Business Application Studio (BAS) this cli is preinstalled.
* Install the devDependencies defined inside 'package.json' (by accessing 'dummyUI5' path and calling 'npm install') on your IDE.
* You do not need to add / configure any services first, but you can add e.g. destinations after the first deployment on the binded destination-service-instance.

## Continuous Integration / Continuous Delivery
This repository is containing 2 easy pipelines. Within both you can deploy to a Cloud Foundry environment on a BTP. 
* GitLab: Find file ".gitlab-ci.yml" in the root path  
* GitHub: Find file "main.yml" inside ".github/workflows/" path  

You're required to maintain the mentioned variables / secret sinside your CI/CD tool of choice.  

## Contact and Credits
Please check licences for each npm module on your own, before using it on your production.  
Come back to us, if you need guidance or more information about it.  

CIT Focus eG  
We're a collective of IT experts who do integrate, implement, secure and consult companies on their SAP Cloud journeys!  
[www.cit-focus.com](http://www.cit-focus.com)
