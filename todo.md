Workflow:
1. User creates an account with password and email.

2. filtering out rated movies works, but needs to do maybe a $scope.apply

2. User begins rating movies.
- User can pick a genre to rate from, check out specific details like poster, synopsis and a trailer if available.
- User then gives it a rating, 1 - 5.
- User then receives a list of recommended movies and why it was picked.
-- Based off people who worked on it?
-- Based on another user who you match up with based on questions? "curators"

Features needed:
- Movies that are rated go into the rated pile with all their metadata.
-- This should happen completely on the backend.

Problem:
How do I know which movies have already been rated?
-- Maybe there's a way to filter out the movies that have already been rated?
--- I like this because movies are always being added to the database.

It should only store the id and rating in the database for rated movies.

Objects:
- Movies to rate array.
-- use underscore method, filter, with the below array to come up with this array.

- Moviesthat have been rated by Id array.
