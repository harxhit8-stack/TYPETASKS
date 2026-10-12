/**
 * Creates and appends a new task.
 * - Guards against empty/whitespace-only input.
 * - Prevents ID collision if prior items were deleted.
 */
export function addTask(tasks, title) {
    const cleanTitle = title.trim();
    if (cleanTitle.length === 0) {
        return [...tasks];
    }
    // Safe unique ID generation even after item deletions
    const nextId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
    const newTask = {
        id: nextId,
        title: cleanTitle,
        status: "todo",
    };
    return [...tasks, newTask];
}
/**
 * Marks the matching task as 'done'.
 * Preserves immutability.
 */
export function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
/**
 * Filters tasks strictly by TaskStatus.
 * Invalid status strings will fail compilation.
 */
export function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// --- Enhanced Custom Operations & Boundary Handlers ---
/**
 * Progresses a task forward: 'todo' -> 'in-progress' -> 'done'.
 * Safe boundary handling: already 'done' tasks remain unchanged.
 */
export function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id !== id)
            return task;
        let nextStatus;
        switch (task.status) {
            case "todo":
                nextStatus = "in-progress";
                break;
            case "in-progress":
                nextStatus = "done";
                break;
            case "done":
                nextStatus = "done"; // Terminal state preservation
                break;
            default: {
                // Exhaustive compile-time check
                const _exhaustiveCheck = task.status;
                return _exhaustiveCheck;
            }
        }
        return { ...task, status: nextStatus };
    });
}
/**
 * Safely removes a task by its unique ID.
 */
export function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
/**
 * Returns total count of tasks under a given status.
 */
export function countByStatus(tasks, status) {
    return filterByStatus(tasks, status).length;
}
/**
 * Returns an aggregated summary of all task counts in one pass.
 */
export function getTaskSummary(tasks) {
    return {
        todo: countByStatus(tasks, "todo"),
        "in-progress": countByStatus(tasks, "in-progress"),
        done: countByStatus(tasks, "done"),
    };
}
//# sourceMappingURL=model.js.map