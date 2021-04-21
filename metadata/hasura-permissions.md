
Rule to only allow each user read it's own data:

``` 
{"userId":{"_eq":"X-Hasura-User-Id"}}
```