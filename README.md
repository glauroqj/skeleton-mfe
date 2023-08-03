Micro Frontend

- (link)[https://betterprogramming.pub/10-decision-points-for-micro-frontends-approach-4ebb4b59f40]

Types of Micro Frontend

1.Server-side template composition
2.Build-time integration
3.Runtime integration via iframes
4.Runtime integration via JavaScript
5.Run-time integration via Web Components

\*\*Pitfalls To Avoid With Micro-Frontend:

- Micro-frontend is not for everyone. Jumping into it just because it is a hot new trend might backfire on you. If different departments in the team are using different frameworks, it might affect page performance.

- Right from source production, every micro-frontend should have a separate build and test pipeline. Every frontend should have a separate and independent CI/CD path, because that’s only how each part can be deployed independently, with zero interdependence.

- Test every frontend in the build and test pipeline, or you might leave a lot of scope for debugging later. Typescript is your buddy here.

- After decoupling codebases, it becomes easy for the team to work with autonomy, but that doesn’t nullify the need for cross-platform communication. Without knowing what is going on in other teams, overall product development becomes directionless.

\*\*The Bottom Line

- In a nutshell, a micro-frontend framework aids cross-functional teams successfully. Also, it enables end-to-end development and deployment of individual micro-applications.

\*\*Useful Links

- (awesome mfe)[https://github.com/ChristianUlbrich/awesome-microfrontends]

\*\*Testing Tech: (Hypernova)[https://github.com/airbnb/hypernova]

- (airbnb hypernova)[https://airbnb.io/projects/hypernova/]

\*\*Module Federation
(link)[https://github.com/module-federation/universe]

\*\* Martin Fowler MFE
(link)[https://martinfowler.com/articles/micro-frontends.html#Server-sideTemplateComposition]

--------------------------- // -----------------------------------

Test 1 - Bit.dev ( build-time / runtime )

Test 2 . https://single-spa.js.org/docs/create-single-spa
