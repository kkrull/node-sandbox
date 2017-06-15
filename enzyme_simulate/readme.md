# Getting events to work with Material UI components

There's a whole debate going on when people try to simulate events on material-ui components
in their tests.  The community often pushes back and says something along the lines of
"shallow render you component and make sure you create its immediate children with the right props".

This point of view is summed up pretty well in this [Enzyme Issue](https://github.com/airbnb/enzyme/issues/780)

There are some good points in favor of only testing your immediate children, but there are also a few points against.
Namely, _you're testing implementation, not behavior_.

Put another way:

- If you replace material-ui with something else that provides the required behavior, your test breaks even though
  your component still does what it is supposed to.
- You can verify that you're setting the properties you _think_ you should be setting on the material-ui
  component, but that doesn't mean it will actually work.  I find that I often still have to fire up a web
  server to make educated guesses on the markup and event handlers.  In other words: manual testing.
- Once I do get it working, I'm afraid to change it due to the lack of automated tests.


## Testing behavior with material-ui

As the post above describes, you _can_ simulate the events and get them through to the underlying DOM elements.
To do that, you have to navigate your way through a fairly complex hierarchy of React / DOM elements.  So
the main issues getting in the way are:

- It's hard to tell which event you should be simulating.  The material-ui documentation doesn't
  really spell out whether the component ultimately uses a `change` event, `touchstart`, `click`, etc...
- It's hard to tell which React- or DOM-element in the hierarchy you should target.


See `test/MyCheckbox.spec.js` for an example of how to get a `<Checkbox />` test working.  The solution involves:

- Remember that the component needs to be wrapped up in a `<MuiThemeProvider />`, or it will complain (and fail to render).
- Enzyme full DOM rendering with `mount` is required, since you're ultimately targeting a real DOM element (not a React component).
- `ReactWrapper#find` the element you want and `ReactWrapper#simulate` the event to it.


The part that I want to remember (and the reason for writing this document) is _how_ I figured this out:

- `mount` the component and `console.log(ReactWrapper#debug)` it to see the DOM rendering
- Look for interesting looking event handlers like `onChange`, `onClick`, etc...
- Try the element/event combinations you find until you find the one you want.

The debug output will look something like this, where the part of interest is the `onChange` handler of the `<input>` element.

```html
<MyCheckbox>
  <MuiThemeProvider muiTheme={{...}}>
    <Checkbox onCheck={[Function]} labelPosition="right" disabled={false}>
      <EnhancedSwitch labelPosition="right" disabled={false} inputType="checkbox" switched={false} switchElement={{...}} rippleColor="rgba(0, 0, 0, 0.87)" iconStyle={{...}} onSwitch={[Function]} labelStyle={{...}} onParentShouldUpdate={[Function]}>
        <div className={[undefined]} style={{...}}>
          <EventListener target="window" onKeyDown={[Function]} onKeyUp={[Function]} />
          <input type="checkbox" style={{...}} name={[undefined]} value={[undefined]} disabled={false} onBlur={[Function]} onFocus={[Function]} onChange={[Function]} onMouseUp={[Function]} onMouseDown={[Function]} onMouseLeave={[Function]} onTouchStart={[Function]} onTouchEnd={[Function]} />
          <div style={{...}}>
            <div style={{...}}>
              <div>
                <ToggleCheckBoxOutlineBlank style={{...}}>
                  <SvgIcon style={{...}} onMouseEnter={[Function]} onMouseLeave={[Function]} viewBox="0 0 24 24">
                    <svg onMouseEnter={[Function]} onMouseLeave={[Function]} style={{...}} viewBox="0 0 24 24">
                      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    </svg>
                  </SvgIcon>
                </ToggleCheckBoxOutlineBlank>
                <ToggleCheckBox style={{...}}>
                  <SvgIcon style={{...}} onMouseEnter={[Function]} onMouseLeave={[Function]} viewBox="0 0 24 24">
                    <svg onMouseEnter={[Function]} onMouseLeave={[Function]} style={{...}} viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </SvgIcon>
                </ToggleCheckBox>
              </div>
              <TouchRipple style={{...}} color="rgba(0, 0, 0, 0.87)" muiTheme={{...}} centerRipple={true} abortOnScroll={true}>
                <div onMouseUp={[Function]} onMouseDown={[Function]} onMouseLeave={[Function]} onTouchStart={[Function]} onTouchEnd={[Function]} />
              </TouchRipple>
              <FocusRipple innerStyle={{...}} color="rgba(0, 0, 0, 0.87)" muiTheme={{...}} show={false}>
                <ScaleIn maxScale={0.85} style={{...}} enterDelay={0}>
                  <TransitionGroup style={{...}} component="div" childFactory={[Function]}>
                    <div style={{...}} />
                  </TransitionGroup>
                </ScaleIn>
              </FocusRipple>
            </div>
          </div>
        </div>
      </EnhancedSwitch>
    </Checkbox>
  </MuiThemeProvider>
</MyCheckbox>
```
