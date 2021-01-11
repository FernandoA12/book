module.exports = toolbox => {
    const {
        filesystem: { homedir, read, write }
    } = toolbox;

    toolbox.database = {
        data: JSON.parse(read(`${homedir()}/.book_db`)),
        path:  `${homedir()}/.book_db`,
        store: (db) => write(`${homedir()}/.book_db`, db)
    };
}