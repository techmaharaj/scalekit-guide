import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To make Scalekit integration easier, you can install our SDK by running the below command in your terminal. 

**Install Scalekit SDK** 

<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="NodeJS">


```shell
$ npm install @scalekit-inc/nodejs-sdk
```

</TabItem>
<TabItem value="py" label="Python">

```shell
$ pip install scalekit
```

</TabItem>
<TabItem value="golang" label="Go">

```go
import "scalekit-inc/go-sdk"
```

</TabItem>
</Tabs>

**Init the SDK**

To use the Scalekit SDK in your application code, you can create the client using the following code and use the client to invoke appropriate API calls.


<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="NodeJS">

```javascript
const scalekit = new Scalekit(SCALEKIT_ENVIRONMENT_URL, SCALEKIT_CLIENT_ID, SCALEKIT_CLIENT_SECRET);
```

</TabItem>
<TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem>
</Tabs>