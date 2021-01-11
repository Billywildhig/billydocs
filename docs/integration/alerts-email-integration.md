title: Alerts Email Integration
description: Sending emails for threshold, anomaly and / or heartbeat alerts with Sematext infrastructure and application monitoring platform. Email is default notification hook and additional integrations that can be used to send notifications to PagerDuty, Slack, and other 3rd party messaging services are also available  

Email used when you first sign up for Sematext account also becomes your **Default Notification Hook** email for alerts. It is account default and automatically enabled. You can edit hook's details, copy it or delete it using actions dropdown menu.

<a href="#email-hook"><img alt="Email Notification Hook" src="/docs/images/integrations/default-email-notification-hook.png" title="Email Notification Hook"></a>

All your notification hooks are listed on [Notification Hooks page](https://apps.sematext.com/ui/hooks) in Sematext's Metrics, Traces and Logs platform. Here you can see your default email notification hook, create new, edit or delete existing email hook, and also integrate other 3rd party notification services such as Slack, PagerDuty, HipChat and more.

## Add New Email Hook

There are two ways to create a new notification hook. On [Notification Hooks page](https://apps.sematext.com/ui/hooks) use green add hook button.

<img alt="Add new Notification Hook" src="/docs/images/integrations/add-new-hook.png" title="Add new Notification Hook">

Alternatively, navigate to [Notification Hooks](https://apps.sematext.com/ui/hooks/create) (in [EU](https://apps.eu.sematext.com/ui/hooks/create)) page. Enter required hook name and email address. You can test the email before you save it and noreply email will be generated and sent to that address. 

Confirm that you have received the test email, save new email notification hook and it is ready to be used for you apps alerts. It can be used with single or multiple apps as your notification hook.

<img alt="Add new Email Notification Hook" src="/docs/images/integrations/create-new-email-notification-hook.gif" title="Add new Email Notification Hook">
<div id="email-hook" class="modal" role="dialog" aria-labelledby="Email Notification Hook" aria-describedby="Email Notification Hook">
  <div class="modal-content">
    <div class="header">
      <a href="#" id="close">
        <div class="box box3">
          <svg viewBox="0 0 40 40">
					    <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
					  </svg>
        </div>
      </a>
      <h2>Sematext Integrations - Default Email Notification Hook</h2>
    </div>
    <div class="copy">
      <img alt="Email Notification Hook" src="/docs/images/integrations/default-email-notification-hook.png" title="Email Notification Hook">
    </div>
  </div>
  <a href="#">
    <div class="overlay"></div>
  </a>
</div>
