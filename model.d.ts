export type TaskStatus = "todo" | "in-progress" | "done";
export interface Task {
    readonly id: number;
    readonly title: string;
    readonly status: TaskStatus;
}
/**
 * Creates and appends a new task.
 * - Guards against empty/whitespace-only input.
 * - Prevents ID collision if prior items were deleted.
 */
export declare function addTask(tasks: readonly Task[], title: string): Task[];
/**
 * Marks the matching task as 'done'.
 * Preserves immutability.
 */
export declare function completeTask(tasks: readonly Task[], id: number): Task[];
/**
 * Filters tasks strictly by TaskStatus.
 * Invalid status strings will fail compilation.
 */
export declare function filterByStatus(tasks: readonly Task[], status: TaskStatus): Task[];
/**
 * Progresses a task forward: 'todo' -> 'in-progress' -> 'done'.
 * Safe boundary handling: already 'done' tasks remain unchanged.
 */
export declare function advanceTask(tasks: readonly Task[], id: number): Task[];
/**
 * Safely removes a task by its unique ID.
 */
export declare function deleteTask(tasks: readonly Task[], id: number): Task[];
/**
 * Returns total count of tasks under a given status.
 */
export declare function countByStatus(tasks: readonly Task[], status: TaskStatus): number;
/**
 * Returns an aggregated summary of all task counts in one pass.
 */
export declare function getTaskSummary(tasks: readonly Task[]): Record<TaskStatus, number>;
//# sourceMappingURL=model.d.ts.map