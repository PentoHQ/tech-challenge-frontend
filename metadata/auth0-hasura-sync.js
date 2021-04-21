/*
Install this as a rule on your auth0 dashboard
Update the url to point to your actual HASURA graphql API and
set the HASURA_ADMIN_SECRET in the “Rules > Settings” section of Auth0.
*/

function (user, context, callback) {
    const userId = user.user_id;
    const url = "https://my-hasura-app.hasura.app/v1/graphql";
    const upsertUserQuery = `
      mutation($userId: String!){
        insert_users(objects: [{ id: $userId }], on_conflict: { constraint: users_pkey, update_columns: [] }) {
          affected_rows
        }
      }`
    const graphqlReq = { "query": upsertUserQuery, "variables": { "userId": userId } }
  
    request.post({
        headers: {'content-type' : 'application/json', 'x-hasura-admin-secret': configuration.HASURA_ADMIN_SECRET},
        url:   url,
        body:  JSON.stringify(graphqlReq)
    }, function(error, response, body){
         console.log(body);
         callback(null, user, context);
    });
  }