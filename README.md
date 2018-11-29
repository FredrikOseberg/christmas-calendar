# Christmas Calendar

This is the repository for a configurable digital christmas calendar that you can use for your loved ones (or a really, really good friend). You can find a demo
[here](https://fredrikoseberg.github.io/christmas-calendar), if you can stomach the romantic pictures of me and my girlfriend.

## How it works

Begin by forking the repository and cloning down a local copy of the project.

The whole website is powered by a single JSON file. In order to configure the calendar you just need to change the images you want to use in
the public folder of the project, and configure the json file with the correct information.

Here is an excerpt of the most important json data:

```
{
  "name": "Heidi",
  "appPath": "/christmas-calendar",
  "coverImage": "/christmas.jpg",
  "calendar": [
    {
      "id": 1,
      "mainImage": "/Australia/1.jpg",
      "secondaryImage": "/snipp.png",
      "text": "30 min massasje"
    },
    {
      "id": 2,
      "mainImage": "/Australia/2.jpg",
      "secondaryImage": "/snipp.png",
      "text": "Jeg lager middag"
    }
```

```
name: Used in the large image in the top of the calendar. Replace with the name of your recipient.
appPath: The repository name, used for deployment on github pages
coverImage: The large image at the top. Replace with the image you want.
calendar: An array of objects denoting a single calendar day:
    id: Calendar date
    mainImage: The image you want to show when you open that calendar day
    text: The text you want to display inside an opened calendar day. For example: "Check your christmas sock for todays gift"
    secondaryImage: The image at the bottom of the gift section of each opened calendar day
```

The app uses localstorage to track and save your progress in the calendar. If you open a day by accident, you can reset it by deleting local storage.

Merry christmas!
