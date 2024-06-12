Prepare the agent

```
docker compose up
```

Node.js

```
npm run start
```


.NET app (on Mac M1)

```
CORECLR_ENABLE_PROFILING=1 CORECLR_PROFILER={846F5F1C-F9AE-4B07-969E-05C26BC060D8} CORECLR_PROFILER_PATH="$(pwd)/bin/Debug/net8.0/datadog/osx/Datadog.Trace.ClrProfiler.Native.dylib" DD_DOTNET_TRACER_HOME="$(pwd)/bin/Debug/net8.0/datadog" dotnet run
```

Browser: go to [http://localhost:3000]
