# Countries Info App

## App Info

This web application lets users explore countries by selecting one to view detailed information.

Upon visiting the website, users see a full list of countries. For quicker searches, a search bar is available where users can enter keywords to find specific countries. To refine their search, users can utilize two filters: region and language. Additionally, sorting options are available for population and area, allowing users to arrange the list in ascending or descending order.

This project is built with Nuxt.js and Tailwind CSS. It utilizes the REST Countries API (https://www.restcountries.com/) to fetch information for all countries.

## Setup

Check out the deployed project here: https://countries-info-app-regan.vercel.app/

To run the project locally, follow these commands:

```bash
# Clone the project repository to your computer:
$ git clone https://github.com/hens-virtuella-varld/countries-info-app.git

# Install all dependencies:
$ npm install

# Run the development server:
$ npm run dev

# Build the application for production deployment:
$ npm run build

# Preview the production build locally:
$ npm run preview
```

## My Solution To Build This App

This website can be split into two parts: One part is for sorting, filtering, and search features (components: `OrderSelector`, `Selector`, and `CountrySearcher`). The other part is to display filtered countries(component: `CountryItem` which is in a for loop), as well as the details for selected country (component: `SelectedCountry`).

The `allCountries` variable stores the root data for the website, and its data of all countries fetched from The REST Countries API or stored in a JSON file.

The `filteredCountries` array variable is a Vue computed ref value storing the result of all countries when using the sorting, filtering, or search features.

The `CountryItem` component is a customised button with a country's flag and name, and this component is used in a for loop with `filteredCountries` to show each country as a clickable choice to users.

The `selectedCountry` variable, either stores `null` or a country object selected by users. If the `selectedCountry`'s value is `null`, the `CountryItem` component is used to display all filtered countries. If its value is a country object, then `SelectedCountry` component is used to display the details of a countries. There is a button in the `SelectedCountry` component for users to go back to result for all countries. This button does sets `selectedCountry` to `null`.

## The Decisions I've Made

### Working Directly in the Main Branch

I opted to work directly in the main branch for several reasons:

- I was the sole developer on this project.
- There was no code review process.
- Given the evolving nature of the project, crafting meaningful branch names would have been challenging. I was essentially building the application incrementally, so a clear feature roadmap wasn't established at the outset.

### From Dropdowns to Interactive Buttons

I wanted to offer users both search and select modes for finding countries. In search mode, they could find countries by keyword and then select one for details. In select mode, they could choose a country from a dropdown list and see its details. To see how this functionality looked like, follow these commands:

```bash
# Ensure you are in the main branch:
$ git checkout main

# View the commit where I explored a dropdown list (unstyled):
$ git checkout beaeae2

# Return to the head of the main branch:
$ git checkout main
```

However, I was struggling to style the dropdown list in the select mode. I found a pre-built dropdown list made with Tailwind and Vue from Tailwind UI (https://tailwindui.com/components/application-ui/forms/select-menus).

While the design fit well, it required a `selected` Vue ref variable that expected a country directly from my data (`const selected = ref(allCountries[3])`). This clashed with my codebase structure. In this situation, I had three options: style the dropdown myself, adjust my codebase, or find a different dropdown. I preferred to style it myself but it would be time-consuming. Therefore, I decided to abandon the dropdown idea.

My UI eventually evolved into the live version you see now. It leverages HTML buttons and CSS grid to display countries with sorting, filtering, and search features. I prefer this approach because it not only shows results directly, avoiding the extra click of a dropdown, but it also cleverly combines select and search mode functionality into a single interface.

### A Wrong Decision: Not To Use TypeScript

I initially decided against using TypeScript as I was unfamiliar with Vue and Nuxt.ts. I thought skipping TypeScript would save me time, but this turned out to be a mistake. Debugging took more time than I had expected, and most of those bugs could have easily been caught with TypeScript.

One common mistake I encountered involved accessing variables created with Vue's `ref` attribute. Unlike React's `useState`, you can't directly access these variables. Instead, you need to use their `.value` property. This was initially confusing due to my experience with React. Here's an example to illustrate:

```Vue
<script setup>
const searchInput = ref('');
console.log(searchInput.value) // Valid. Access value using `.value`
console.log(searchInput) // Invalid. Direct access not allowed.
</script>
```

**Key takeaway: Always use TypeScript for my new projects!**

## Todo If I have More Time

### State Management

State management would be beneficial for my project. I haven't picked up state management in Vue yet, but would love to learn and implement it since it's a common practice.

### Loading Animation & Custom Server Error Page

The REST Countries API (https://www.restcountries.com/) was very slow at the beginning of my development, so I used a JSON file for my data instead.

The REST Countries API works well now, but in case it becomes slow again, it would be beneficial to provide users with a page loading animation while the data is pending to improve web performance, and a customized error page if the server doesn't respond.

However, by the time I finished all the necessary features, the REST Countries API was working well.
