all: index.html action.html issues.html

index.html: templates/index.html templates/nameemail-form.html templates/footer.html
	./repl.sh templates/index.html NAMEEMAIL templates/nameemail-form.html \
	| ./repl.sh /dev/stdin FOOTER templates/footer.html \
	> index.html

action.html: templates/action.html templates/nameemail-form.html templates/footer.html
	./repl.sh templates/action.html NAMEEMAIL templates/nameemail-form.html \
	| ./repl.sh /dev/stdin FOOTER templates/footer.html \
	> action.html

issues.html: templates/issues.html templates/footer.html
	./repl.sh templates/issues.html FOOTER templates/footer.html \
	> issues.html
