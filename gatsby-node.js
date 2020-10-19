/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // CURRENTLY CREATING 2 HOME PAGES ON BOTH PATHS!!!!
    // NEED TO SOLVE THE PATH ISSUE OUT AND ENSURE WE CREATE EVERYTHING ON APPROPRIATE PATH
    // SEE BELOW - NOT IDEAL BUT AT THIS STAGE WORKING
    // CREATE HOME (CURRENTLY ARTICLES)
    // const index = await graphql(`
    //     {
    //         allNodePage {
    //             edges {
    //                 node {
    //                     id
    //                 }
    //             }
    //         }
    //     }
    // `)

    // const indexTemplate = path.resolve("src/templates/index.js")

    // index.data.allNodePage.edges.forEach(edge => {
    //     createPage({
    //         path: `/`,
    //         component: indexTemplate,
    //         context: {
    //             id: edge.node.id,
    //         },
    //     })
    // })
    // CREATE GENERIC PAGE QUERY END
    
    // CREATE PAGES
    const page = await graphql(`
        {
            allNodePage {
                edges {
                    node {
                        id
                        path {
                            alias
                        }
                    }
                }
            }
        }
    `)

    const pageTemplate = path.resolve("src/templates/page.js")
        page.data.allNodePage.edges.forEach(edge => {
            console.log('ALIAS?', edge.node.path.alias)
            // NOT THE RIGHT WAY, PATH SHOULD BE BUILT BY SOMETHING LIKE THE ID/SLUG (AS IN LOLLYDESIGN V2)
            // BUT WHILE STILL PLAYI9NG THIS ALLOWS A SINGLE TPL QUERY STRUCTURE
            const pageAlias = edge.node.path.alias ? edge.node.path.alias : "/"
            console.log('PAGE ALIAS:', pageAlias)
            createPage({
                path: pageAlias,
                component: pageTemplate,
                context: {
                    id: edge.node.id,
                },
            })
        })
        // CREATE PAGES END
  }