# COVID19-TweetViz

*![IMAC badge](https://img.shields.io/badge/IMAC-%202022-brightgreen.svg?link=https://www.ingenieur-imac.fr/&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA4LTExVDIyOjMyOjA5KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOC0xMVQyMzowMTowMiswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wOC0xMVQyMzowMTowMiswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWY0YmVlZDYtMTVkNi0yZTQ4LWEzNzEtMTQyYjNmNTAzNTljIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OWMzMTI5OGMtNWU5Mi1jZjQ1LTk5YmYtNGZhYmU0MjQyMTk4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTEwNGUyOTktNjI2OS04OTQ1LTk3ZjEtMGM0NDkzYzQ0M2EyIj4gPHhtcE1NOkhpc3Rvcnk%2BIDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMTA0ZTI5OS02MjY5LTg5NDUtOTdmMS0wYzQ0OTNjNDQzYTIiIHN0RXZ0OndoZW49IjIwMjAtMDgtMTFUMjI6MzI6MDkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MWY0YmVlZDYtMTVkNi0yZTQ4LWEzNzEtMTQyYjNmNTAzNTljIiBzdEV2dDp3aGVuPSIyMDIwLTA4LTExVDIzOjAxOjAyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk%2BIDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY%2BIDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8%2BoyRRbQAAA4xJREFUKJFdk1tsFFUAhv9zZnb21u3eurVQoK3bIi3WKqbWglViQhvTjYqkicQokOhDiUqiRAMiiSYkXoJUE2OBxgfSBxS5RYy1aTZSIQi2UoLEym5rwXR72e3eZ3d2Zs45Pogh4Xv5376n7yftzx0GAOQ1fdnqKu%2BxQMP6g92FQ0Mh9UivwZZ3Llptm3ta2pDyVn231t806jBvfEGLYTSVB1Hv9KMAHYQAMv5DIuBDIOShvOyplrnRBFnsE4x4BXAEACPgWzixbREg8wT8W9wDndECuMUCLGKtGrnueRDdicHG9smhg7l8wKssTcOeuBku6JlRQ%2FLCzmfgNie%2BMYTtJVNwEHJXJO%2BtOQueI8hGLW9Xl4b9mwMj2%2BTELDL5Soxv%2F%2BD9omfF8Qo9hnTmetbviJ8zeR6M2AbLZMXKhfj6fxERBzzAlAScw8vMah5L%2BJxwNij4dXc%2Fxtq68o48QpZZ4%2FzFmfcg2IlOhy34U6vbh4YyD2Ka6DVA%2BxWJQ3q9fRWKDsfOVNo1kMq5URVfmB5s7D38leuFlmzfWRdNp7a3tNeNr%2FE9dVPVJ6eSxcz5%2BdL6V0YSTpLjllCzV01TSi5TkcOnUPCl0sohu3lcDtg7b8X5nitHR581JRm1HUEsZua%2BT6rszZXuPjCx4efwQqE%2BlidzQVsGnIu%2BbJEckvUL1MlUCqyUYe0RBrgozi45kJfq1Ei9ivk%2FckjHc2CC2esqp1Hn%2BQdd5da8Irj%2BwwUViwUJPpdwUabSnSTP3nUpGdhj6eW4vBR2c%2F0d%2BKqHo5EY%2Fpy4jdsp%2F4uERD%2BuuW8PJPr3o5JePkMsSo1vWTmKJexfSPFXpc8qgXItfdH%2B%2B2LSOp59Bm5asaErsumSucIWlZ8Wmik%2Fv66Wnwqt%2BxEmG3tch%2BcXAWI3tTJUeMRetcAOaCUGKfDIDlxzP4CraLwyteb%2B2uCu9MPOihi6SlfhmEjubzNvHF3bRWHxOJ6IL0VHBbIWyV4CmG03TOcncwkNJYNDmu34CL%2F5WxBufHLfSX%2FoLZYR6LBGoJyk2BQZfmyjd%2FLaWGv76qS9YdgtKiTNmIGg6huUl31OTDcWkkVoOodcXVoEAAst8q1CEPRrW6OrLi0c3%2FbXmV3J5jpXQXH16NxiCpagTqUZBk%2B%2BltRODFAuAUTcLfvOGhy0m1J%2B2iNnP9Q062k4eZaAhwDsuNNukPFCmIAMgEj3Xg3%2FAiD3pieRCazTAAAAAElFTkSuQmCC)* ![Date badge](https://img.shields.io/badge/Project%20date-05%2F2021-lightgrey) ![License](https://img.shields.io/github/license/N0Ls/COVID19-TweetViz) ![Github pages status](https://img.shields.io/github/deployments/N0Ls/COVID19-TweetViz/github-pages) ![Top Language](https://img.shields.io/github/languages/top/N0Ls/COVID19-TweetViz)

## Concept

Covid-19 TWEETS VIZ is a data visualisation project that answers MediaFutures Open Call, following the Artist for media track. The various projects answering the call are based on the use of data on climate, health, ecology and science to offer experiences that encourage citizens to become more involved in these causes.

As the COVID-19 virus quickly spreads around the world, unfortunately, misinformation related to COVID-19 also gets created and spreads like wildfire. Such misinformation has caused confusion among people, disruptions in society, and even deadly consequences in health problems.

To understand and analyse the diffusion and the impact of such information, we have decided to link the information, true or false, relayed by Twitter users to their popularity and the impact they could have. This impact is mainly linked to current data linked to an account on a social network: number of subscribers, average number of retweets, etc.

**Our idea was to see and to analyse what was the actual impact of spreading misinformation.**

## Authors

- **Nils LANDRODIE** - *IMAC's master degree* - [![](https://img.shields.io/badge/GitHub-N0Ls-100000?style=flat&logo=github&logoColor=white&labelColor=100000&color=333333)](https://github.com/N0Ls)
- **Erwann LEFEVRE** - *IMAC's master degree*
- **Cloé QUIRIN** - *IMAC's master degree*
- **Vincent SCAVINNER** - *IMAC's master degree* - [![](https://img.shields.io/badge/GitHub-vscav-100000?style=flat&logo=github&logoColor=white&labelColor=100000&color=333333)](https://github.com/vscav)

## Dataset

For this project we used the [COVID-19 Fake News Dataset ](https://www.kaggle.com/arashnic/covid19-fake-news) from Kaggle.

We used [Hydrator](https://github.com/DocNow/hydrator), in order to retrieve informations related to the tweets contained in the data set.

Data was then sorted to suit our needs and to be more relevant by using Python and the Pandas library.

## Factor of influence

In order to be able to compare the influence of each tweets we came up with our own mathematical formula that uses the different tweet and user characteristics available.
```math
Influence = log_{10}(1+RetweetNb * 4.2) * log_{10}(1+FavoriteNb * 1.2) * log_{10}(1+\frac{FollowerNb}{1+FollowingNb})
```

## Design 

The design represents a big part of our work. Indeed, in order to represent at best the influence of the veracity of the information around COVID-19 in 2020, we had to think about how to depict this influence.

Firstly, we wanted to play with colors as we are here talking about true or false facts.However, we did not want to use the classic red and green combination. We also wanted to represent a network of information, a sort of constellation echoing the social networks and the internet. That is why we chose to use a light blue and light pink combination to recreate this feeling of true/false while remaining in this idea of network/constellation. 

Secondly, we wanted to represent several axes in our data design. In addition to representing the data and its influences on Twitter, we wanted to create a timeline that would allow us to see the evolution of opinions as the research on COVID-19 progressed. Therefore, our timeline is represented vertically by the Y axis. The X axis, however, is divided into two categories, the News and the Claims.On this axis we wanted to contrast the news, which are information published by real newspapers, specialized magazines, with the claims, which are simple tweets talking about COVID-19. Note that news and claims can be true or false, whether intentional or not.

The tweets are represented by luminous circles, to emphasize this network/constellation aspect.
Finally, the size of these circles will represent their influence and it is the formula we have established that allows us to automatically define their size.

## Implementation - Technology

* ReactJs
* React-D3
* Python
* Pandas

## Get started 

You can either use the github pages of the project [here](https://n0ls.github.io/COVID19-TweetViz/).

Otherwise, to set up the project locally and get a local copy up and running, follow the following steps.

* First of all, clone the repository 

```
https://github.com/N0Ls/COVID19-TweetViz.git
```

* Go inside the project folder

```sh
cd tweetviz
```

* Install the dependencies

```sh
npm install
```

* Start the project

```sh
npm start
```

* Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

## Project Report

[Report](https://github.com/N0Ls/COVID19-TweetViz/blob/cb8948f13553f25112f728a1eaf7b5ab6ce315dc/Covid19_Tweets_Viz_Landrodie_Lefevre_Quirin_Scavinner.pdf)

