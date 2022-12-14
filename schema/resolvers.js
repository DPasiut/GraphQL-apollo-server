const { UserList, MovieList } = require("../Data");
const _ = require("lodash");
const { args } = require("commander");

const resolvers = {

    Query: {
        //user resolvers
        users: () => {
            return UserList;
        },

        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        // movie resolvers
        movies: () => {
            return MovieList;
        },

        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie;
        }
    },

    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.publicationYear >= 2006 && movie.publicationYear <= 2010);
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
        },

        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let updatedUser;
            UserList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername;
                    updatedUser = user;
                }
            });
            console.log(id, newUsername);
            console.log(updatedUser);
            return updatedUser;
        
        },

        deleteUser: (parent, args) => {
            let id = args.id
            _.remove(UserList, (user) => user.id === Number(id));
        }
    }
};

module.exports = { resolvers };

