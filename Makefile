all: index.html action.html meet.html issues.html endorsements.html

index.html: templates/index.html templates/nameemail-form.html templates/titlebar.html templates/footer.html
	./repl.sh templates/index.html NAMEEMAIL templates/nameemail-form.html \
	| ./repl.sh /dev/stdin TITLEBAR templates/titlebar.html \
	| ./repl.sh /dev/stdin FOOTER templates/footer.html \
	> index.html

meet.html: templates/meet.html templates/titlebar.html templates/footer.html
	./repl.sh templates/meet.html TITLEBAR templates/titlebar.html \
	| ./repl.sh /dev/stdin FOOTER templates/footer.html \
	> meet.html

endorsements.html: templates/endorsements.html templates/endorser-form.html templates/titlebar.html templates/footer.html
	./repl.sh templates/endorsements.html ENDORSERS templates/endorser-form.html \
	| ./repl.sh /dev/stdin TITLEBAR templates/titlebar.html \
	| ./repl.sh /dev/stdin FOOTER templates/footer.html \
	> endorsements.html

action.html: templates/action.html templates/nameemail-form.html templates/titlebar.html templates/footer.html
	./repl.sh templates/action.html NAMEEMAIL templates/nameemail-form.html \
	| ./repl.sh /dev/stdin TITLEBAR templates/titlebar.html \
	| ./repl.sh /dev/stdin FOOTER templates/footer.html \
	> action.html

issues.html: templates/issues.html templates/titlebar.html templates/footer.html
	./repl.sh templates/issues.html TITLEBAR templates/titlebar.html \
	| ./repl.sh /dev/stdin FOOTER templates/footer.html \
	> issues.html
