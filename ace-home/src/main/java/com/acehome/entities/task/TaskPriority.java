package com.acehome.entities.task;

public enum TaskPriority {
    BASSE(1),
    NORMAL(2),
    URGENT(3),
    IMPORTENT(4),
    URGENT_IMPORTENT(5);

    private int val;

    private  TaskPriority(int val) {
        this.val = val;
    }

    public int getValue() {
        return this.val;
    }
}
