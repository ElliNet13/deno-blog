import { fromFileUrl } from "../path.ts";
export function symlink(target, path, typeOrCallback, maybeCallback) {
    target = target instanceof URL ? fromFileUrl(target) : target;
    path = path instanceof URL ? fromFileUrl(path) : path;
    const type = typeof typeOrCallback === "string" ? typeOrCallback : "file";
    const callback = typeof typeOrCallback === "function" ? typeOrCallback : maybeCallback;
    if (!callback) throw new Error("No callback function supplied");
    Deno.symlink(target, path, {
        type
    }).then(()=>callback(null), callback);
}
export function symlinkSync(target, path, type) {
    target = target instanceof URL ? fromFileUrl(target) : target;
    path = path instanceof URL ? fromFileUrl(path) : path;
    type = type || "file";
    Deno.symlinkSync(target, path, {
        type
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjE0Ny4wL25vZGUvX2ZzL19mc19zeW1saW5rLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE4LTIwMjIgdGhlIERlbm8gYXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gTUlUIGxpY2Vuc2UuXG5pbXBvcnQgeyBDYWxsYmFja1dpdGhFcnJvciB9IGZyb20gXCIuL19mc19jb21tb24udHNcIjtcbmltcG9ydCB7IGZyb21GaWxlVXJsIH0gZnJvbSBcIi4uL3BhdGgudHNcIjtcblxudHlwZSBTeW1saW5rVHlwZSA9IFwiZmlsZVwiIHwgXCJkaXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN5bWxpbmsoXG4gIHRhcmdldDogc3RyaW5nIHwgVVJMLFxuICBwYXRoOiBzdHJpbmcgfCBVUkwsXG4gIHR5cGVPckNhbGxiYWNrOiBTeW1saW5rVHlwZSB8IENhbGxiYWNrV2l0aEVycm9yLFxuICBtYXliZUNhbGxiYWNrPzogQ2FsbGJhY2tXaXRoRXJyb3IsXG4pIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0IGluc3RhbmNlb2YgVVJMID8gZnJvbUZpbGVVcmwodGFyZ2V0KSA6IHRhcmdldDtcbiAgcGF0aCA9IHBhdGggaW5zdGFuY2VvZiBVUkwgPyBmcm9tRmlsZVVybChwYXRoKSA6IHBhdGg7XG5cbiAgY29uc3QgdHlwZTogU3ltbGlua1R5cGUgPSB0eXBlb2YgdHlwZU9yQ2FsbGJhY2sgPT09IFwic3RyaW5nXCJcbiAgICA/IHR5cGVPckNhbGxiYWNrXG4gICAgOiBcImZpbGVcIjtcblxuICBjb25zdCBjYWxsYmFjazogQ2FsbGJhY2tXaXRoRXJyb3IgPSB0eXBlb2YgdHlwZU9yQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIlxuICAgID8gdHlwZU9yQ2FsbGJhY2tcbiAgICA6IChtYXliZUNhbGxiYWNrIGFzIENhbGxiYWNrV2l0aEVycm9yKTtcblxuICBpZiAoIWNhbGxiYWNrKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYWxsYmFjayBmdW5jdGlvbiBzdXBwbGllZFwiKTtcblxuICBEZW5vLnN5bWxpbmsodGFyZ2V0LCBwYXRoLCB7IHR5cGUgfSkudGhlbigoKSA9PiBjYWxsYmFjayhudWxsKSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ltbGlua1N5bmMoXG4gIHRhcmdldDogc3RyaW5nIHwgVVJMLFxuICBwYXRoOiBzdHJpbmcgfCBVUkwsXG4gIHR5cGU/OiBTeW1saW5rVHlwZSxcbikge1xuICB0YXJnZXQgPSB0YXJnZXQgaW5zdGFuY2VvZiBVUkwgPyBmcm9tRmlsZVVybCh0YXJnZXQpIDogdGFyZ2V0O1xuICBwYXRoID0gcGF0aCBpbnN0YW5jZW9mIFVSTCA/IGZyb21GaWxlVXJsKHBhdGgpIDogcGF0aDtcbiAgdHlwZSA9IHR5cGUgfHwgXCJmaWxlXCI7XG5cbiAgRGVuby5zeW1saW5rU3luYyh0YXJnZXQsIHBhdGgsIHsgdHlwZSB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxTQUFTLFdBQVcsUUFBUSxZQUFZLENBQUM7QUFJekMsT0FBTyxTQUFTLE9BQU8sQ0FDckIsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsY0FBK0MsRUFDL0MsYUFBaUMsRUFDakM7SUFDQSxNQUFNLEdBQUcsTUFBTSxZQUFZLEdBQUcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQzlELElBQUksR0FBRyxJQUFJLFlBQVksR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFdEQsTUFBTSxJQUFJLEdBQWdCLE9BQU8sY0FBYyxLQUFLLFFBQVEsR0FDeEQsY0FBYyxHQUNkLE1BQU0sQUFBQztJQUVYLE1BQU0sUUFBUSxHQUFzQixPQUFPLGNBQWMsS0FBSyxVQUFVLEdBQ3BFLGNBQWMsR0FDYixhQUFhLEFBQXNCLEFBQUM7SUFFekMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFFaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO1FBQUUsSUFBSTtLQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDM0U7QUFFRCxPQUFPLFNBQVMsV0FBVyxDQUN6QixNQUFvQixFQUNwQixJQUFrQixFQUNsQixJQUFrQixFQUNsQjtJQUNBLE1BQU0sR0FBRyxNQUFNLFlBQVksR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDOUQsSUFBSSxHQUFHLElBQUksWUFBWSxHQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN0RCxJQUFJLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztJQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7UUFBRSxJQUFJO0tBQUUsQ0FBQyxDQUFDO0NBQzFDIn0=