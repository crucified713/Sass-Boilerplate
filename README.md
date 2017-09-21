# Sass-Mockup
A structured Sass mockup that you can start your new project with

## How To
`git clone https://github.com/crucified713/Sass-Mockup.git` into your local directory,
and then `npm install` 

You can either 
`grunt` or `gulp`

It's your choice. (However gulp watch is way faster than grunt watch, not sure why at this stage, but will find out)

## Notes
~~1. The reason you see lots of `unquote()` in **typography** is this mockup is based on `em` units. So instead of calculating and listing font-size and line-height in `em` of each element seperately, you can just put into the initial value in `px` that you would probably grab from your designer colleagues.~~
1. Revert back line-height unit so it uses standard radio, as line height will be updated accordingly when you change diffrent font sizes to an element. 