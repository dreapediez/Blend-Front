# Data Layer

## Data

### calendar (object):

- \_id: number
- isActive: boolean
- createdAt: number
- windows: [array]
  - title: string
  - teaType: string
  - brewed: string
  - ingredients: string
  - time: number
  - temperature: number
  - isOpen: boolean
  - post:
    - answer1: string
    - answer2: string
    - answer3: string
    - answer4: string
    - image: string
    - imageBackup: string
    - createdAt: number

### userState (object):

- isLogged: boolean,

## Data Modifications

### windows (array):

- isActive - false: When the window only shows the corresponding number
- isActive - true: When the window shows all the tea information that belongs to the selected day
- The window changes every time the user adds a new post at the corresponding day.

### userState (object):

- isLogged: only true when the user has a valid token.

# Components

# Start Page

## BlendApp

### Show data

- Show Header
- Show Title (h2)
- Button (Login / Sign Up)

### Get actions

- Send to the button component the action on click.
- Change to Login Page or Register Page

## Button

### Show data

- Show the text received inside the button.

### Get actions

- Call the received action on click.

# Login Page

## BlendApp

### Show data

- Show Header
- Show Title (h2)
- Login form
- Button (Login)

### Get actions

- Send to the button component the action on click.
- Send to the link the action on click.
- Change to Register Page or MyCalendar Page.

## Button

### Show data

- Show the text received inside the button.

### Get actions

- Call the received action on click.

# Register Page

## BlendApp

### Show data

- Show Header
- Show Title (h2)
- Register form
- Button (Register)

### Get actions

- Send to the button component the action on click.
- Send to the link the action on click.
- Change to Login Page or MyCalendar Page.

## Button

### Show data

- Show the text received inside the button.

### Get actions

- Call the received action on click.

# MyCalendar Page

## BlendApp

### Show data

- Show Header component
- Show Menu component
- Show Title (h2)
- Show Calendar component

## Header

### Show data

- Show Blender icon and title (h1)

## Menu

### Show data

- Show the corresponding icons (MyCalendar/User)

### Get actions

- Change to User Page or MyCalendar Page.

## Calendar Component

### Show data

- Show the titel (h2)
- Show filter component
- Show all the windows
- Show pagination component

### Get actions

- Send to the navigation component the action on click.

## Window Component

### Show data

#### 1. isOpen = false

- Number

#### 2. isOpen = true

- Number and titel (h2)
- Show categories (Tea type / Brewed / Ingredients / Time / Temperature)
- Show button component

#### 3. New Post

- Number and titel (h2)
- Show subtitel (Tea moment)
- Show link (View more about that post)
- Post image
- Show button component (Delete / Modify)

### Get actions

- Change window state between isOpen false or true
- Send to the button component the action on click.

## Filter Component

### Show data

- Show close filter with the name: Tea type
- Show open filter with all the categories (Black tea / Green tea / Red tea / White tea / Roiboos / Matcha tea)

### Get actions

- Send to the filter component the action on click to show the selected tea types.

## Navigation Component

### Show data

- Show button component
- Show numeration

### Get actions

- Send to the button component the action on click.

# PostForm Page

## BlendApp

### Show data

- Show Menu component
- Show new post form

## Menu

### Show data

- Show the corresponding icons (Back/User)

### Get actions

- Change to User Page or MyCalendar Page.

## PostForm

### Show data

- Show title
- Show all the corresponding questions
- Add image option
- Button (send)

### Get actions

- Send all the recopiled information to create a new post

## Button

### Show data

- Show the text received inside the button.

### Get actions

- Call the received action on click.

# PostDetail Page

## BlendApp

### Show data

- Show Menu component
- Show post detail

## Menu

### Show data

- Show the corresponding icons (Back/User)

### Get actions

- Change to User Page or MyCalendar Page.

## PostDetails component

### Show data

- Show number and title
- Show all the information recopiled at the post form
- Show image
- Button (Delete / Modify)

### Get actions

- Send to the button component the action on click.
