# Gatsby Plugin Sharp Repro for Issue #17162

Here's the error when your run `yarn develop`:

```
 ERROR 


The GraphQL query from ${project-dir}/src/pages/index.js failed.

Errors:
  originalImage.overlayWith is not a function

  GraphQL request:4:7
  3 |     childImageSharp {
  4 |       fluid(quality: 80, maxWidth: 1920, duotone: {highlight: "#ffcc5c", shadow: "#ff6f69", opacity: 50}) {
    |       ^
  5 |         ...GatsbyImageSharpFluid
URL path:
  /
Context:
  {}
Plugin:
  none
Query:
  query usersKstoneDocumentsBugReproSrcPagesIndexJs2244142877 {
    fileName: file(relativePath: {eq: "fruits.png"}) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920, duotone: {highlight: "#ffcc5c", shadow: "#ff6f69", opacity: 50}) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  fragment GatsbyImageSharpFluid on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }



 ERROR 

UNHANDLED REJECTION {
  err: TypeError: originalImage.overlayWith is not a function
      at overlayDuotone (${project-dir}/node_modules/gatsby-plugin-sharp/duotone.js:72:30),
  message: 'Failed to process image ${project-dir}/src/data/fruits.png'
}



  Error: {
    err: TypeError: originalImage.overlayWith is not a function
  
  
  - message: 'Failed to process image ${project-dir}/src/data/fruits.png'
  
  - }
  
  - index.js:107 process.<anonymous>
    [bug-repro]/[gatsby-cli]/lib/index.js:107:14
  
  - index.js:155 processEmit [as emit]
    [bug-repro]/[signal-exit]/index.js:155:32
  
  - promises.js:201 processPromiseRejections
    internal/process/promises.js:201:33
  
  - task_queues.js:86 processTicksAndRejections
    internal/process/task_queues.js:86:32
```
