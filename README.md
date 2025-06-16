Reproducer for perfromance issues with https://lyne-angular-storybook.app.sbb.ch/?path=/docs/elements-sbb-date-input--docs 

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.
- Clicking on text-input link loads 200 form text input fields almost instantly.
- Clicking on date-input link loads 200 form date input fields after a perceived 3 seconds.
