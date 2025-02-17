# Managing Client Secrets

Client ID and Client Secret are a form of API credentials, like a username and password. You are responsible for keeping Client Secrets safe and secure. Below are some best practices for how you can keep your secrets safe and how you can leverage some of the functionality offered by us to help you do the same.

## Protecting against key leakage

- **Use secure key management systems (KMS) to store client secrets.**
  Whenever you generate a client secret from the Scalekit Dashboard, it is only shown once. You cannot recover this secret again as we only store the hash of the secret and never the raw secret with us. Immediately copy the key to a KMS, which is designed to handle sensitive information with encryption and access controls. Make sure you don’t leave a copy of the key in the local file.

- **Don’t share secret keys using insecure means.**
  Don’t share keys in emails, Slack, or customer support messages.

- **Don’t store keys in in your source code or repositories.**
  Never keep the client secrets as hard coded strings within your source code and always store them as part of your properties file or environments file. Never checkin these properties file in your source code repository either.

- **Prepare to Rotate Secrets.**
  Establish a Standard Operating Procedure internally to rotate Client Secrets in the event of accidental secret leaking. By having these processes in place, you are better prepared to respond to any emergencies with minimal business impact.

- **Grant access only to those who need it.**
  Define a clear policy on which users have permission to create, update or read keys. Limit the access only to those who need it. Audit the access periodically to avoid excess privilege on keys.

- **Audit API request logs to monitor suspicious activities.**
  We recommend that you regularly audit or monitor API logs to proactively identify misused API keys. Make sure your developers aren’t using live mode keys when a test mode key is appropriate.

## Rotating Client Secrets

If you detected anomalous behavior or suspect a secret leak, immediately revoke the secret from Scalekit Dashboard and generate a new one. When in doubt, always exercise your right to generate a new secret and revoke the existing secret.
