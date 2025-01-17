![movie_gif](https://user-images.githubusercontent.com/37863665/81173047-5f231a80-8fda-11ea-91ab-0919dcb7604a.gif)


# Setup Instructions:

1. Run `yarn` to install dependencies.

2. Create a .env file and inside of that file make `REACT_APP_API_KEY = your API key`.

3. Run `yarn serve` and go to http://localhost:3000 in your browser.

4. Or, if you want to check the production version, run `yarn build` and `yarn start` and go to http://localhost:5000 in your browser.

Check it out [here](https://movie-widget.herokuapp.com/) on Heroku.

## Scripts List

### `yarn serve`

Runs the app in the development mode.<br />
Open http://localhost:3000 to see it.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />

### `yarn start`

Runs your production app from the `build` folder at http://localhost:5000.

## Notes

API Endpoints used are:

- [The Movie Database Multi Endpoint](https://developers.themoviedb.org/3/search/multi-search) for Search results.
- [The Movie Database Movies Endpoint](https://developers.themoviedb.org/3/movies/get-movie-videos) for Movie trailers
- [The Movie Database TV Endpoint](https://developers.themoviedb.org/3/tv/get-tv-videos) for TV trailers.
- [The Movie Database People Endpoint](https://developers.themoviedb.org/3/people/get-person-details) for actor biographies.

I'm using one extra endpoint in order to match the project idea shown in the requirements.

If there is a mismatch between API calls and results shown, it is because of extra calls to get actor biographies.

For reusability, I was curious if it meant reusability throughout the same project, or reusability in external projects. I decided to design with external projects in mind, and tried to use props more than useSelector so components were not too closely tied to the specific redux store this project uses.

### Tips:
1. Search "Dwayne Johnson" to see not only some great movie examples but also what it looks like when text is shortened.
2. This app is fully responsive, so feel free to look at it on your cellphone too.
